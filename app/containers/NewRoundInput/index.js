/*
 *
 * NewRoundInput
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectPlayers, selectBonusPlayerID } from './selectors';
import styles from './styles.css';

import { createStructuredSelector } from 'reselect';

import { addRound } from 'containers/App/actions';
import { roundScoreChangeAction, resetAction, bonusPlayerIDChangeAction } from 'containers/NewRoundInput/actions';

import RaisedButton from 'material-ui/RaisedButton';

import RoundScoreSlider from 'components/RoundScoreSlider';
import BonusPlayerIDChooser from 'components/BonusPlayerIDChooser';
import Paper from 'material-ui/Paper';

export class NewRoundInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onAdd = evt => {
    evt.preventDefault();
    this.props.onAddRound(this.props.players);
  }

  setScore = (p1Score, p2Score) => {
    this.props.onRoundScoreChange([
      {
        playerID: 0,
        score: p1Score,
      }, {
        playerID: 1,
        score: p2Score,
      },
    ]);
  }

  setBonusPlayerID = playerID => {
    this.props.onBonusPlayerIDChange(playerID);
  }

  render() {
    const player1 = this.props.players[0];
    const player2 = this.props.players[1];
    return (
      <Paper className={styles.newRoundInput}>
        <form onSubmit={this.onAdd}>
          <div className={styles.resultContainer}>
            <div className={styles.result}>
              {player1.score}
            </div>
            <div className={styles.result}>
              {player2.score}
            </div>
          </div>
          <RoundScoreSlider
            onScoreChange={this.setScore} value={player1.hasBonuPoints
            ? player1.score - 3
            : player1.score}
          />
          <BonusPlayerIDChooser
            player1ID={player1.playerID}
            player2ID={player2.playerID}
            value={this.props.bonusPlayerID}
            onChange={this.setBonusPlayerID}
          />
          <RaisedButton label="Add Score" fullWidth primary type="submit" />
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = createStructuredSelector({ players: selectPlayers(), bonusPlayerID: selectBonusPlayerID() });

function mapDispatchToProps(dispatch) {
  return {
    onAddRound: (round) => {
      dispatch(addRound(round));
      dispatch(resetAction());
    },
    onRoundScoreChange: (round) => dispatch(roundScoreChangeAction(round)),
    onBonusPlayerIDChange: (playerID) => dispatch(bonusPlayerIDChangeAction(playerID)),
  };
}

NewRoundInput.propTypes = {
  players: React.PropTypes.any.isRequired,
  bonusPlayerID: React.PropTypes.any,
  onAddRound: React.PropTypes.func.isRequired,
  onRoundScoreChange: React.PropTypes.func.isRequired,
  onBonusPlayerIDChange: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoundInput);
