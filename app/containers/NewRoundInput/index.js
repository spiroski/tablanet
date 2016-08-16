/*
 *
 * NewRoundInput
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectTotals } from 'containers/App/selectors';
import { selectPlayers, selectBonusPlayerID, selectShown } from './selectors';
import styles from './styles.css';

import { createStructuredSelector } from 'reselect';

import { addRound } from 'containers/App/actions';
import { showAction, hideAction, roundScoreChangeAction, resetAction, bonusPlayerIDChangeAction } from 'containers/NewRoundInput/actions';

import RaisedButton from 'material-ui/RaisedButton';

import RoundScoreSlider from 'components/RoundScoreSlider';
import BonusPlayerIDChooser from 'components/BonusPlayerIDChooser';
import Total from 'components/Total';

import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';

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
    const shown = this.props.shown;
    return (
      <div className={styles.container}>
        <FloatingActionButton secondary style={{ margin: '15px' }} onClick={this.props.onShow} disabled={shown}>
          <ContentAdd />
        </FloatingActionButton>
        <div>
          <div className={styles.column}>
            <Total rounds={this.props.totals[0].rounds} marks={this.props.totals[0].marks} />
          </div>
          <div className={styles.column}>
            <Total rounds={this.props.totals[1].rounds} marks={this.props.totals[1].marks} />
          </div>
        </div>
        <Paper className={shown ? styles.newRoundInput : [styles.newRoundInput, styles.hidden].join(' ')}>
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
            <div>
              <div className={styles.column}>
                <RaisedButton label="Cancel" fullWidth primary onClick={this.props.onHide} />
              </div>
              <div className={styles.column}>
                <RaisedButton label="Add Score" fullWidth secondary type="submit" />
              </div>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shown: selectShown(),
  totals: selectTotals(),
  players: selectPlayers(),
  bonusPlayerID: selectBonusPlayerID(),
});

function mapDispatchToProps(dispatch) {
  return {
    onShow: () => dispatch(showAction()),
    onHide: () => dispatch(hideAction()),
    onAddRound: (round) => {
      dispatch(addRound(round));
      dispatch(resetAction());
    },
    onRoundScoreChange: (round) => dispatch(roundScoreChangeAction(round)),
    onBonusPlayerIDChange: (playerID) => dispatch(bonusPlayerIDChangeAction(playerID)),
  };
}

NewRoundInput.propTypes = {
  shown: React.PropTypes.boo,
  onShow: React.PropTypes.func.isRequired,
  onHide: React.PropTypes.func.isRequired,
  totals: React.PropTypes.any.isRequired,
  players: React.PropTypes.any.isRequired,
  bonusPlayerID: React.PropTypes.any,
  onAddRound: React.PropTypes.func.isRequired,
  onRoundScoreChange: React.PropTypes.func.isRequired,
  onBonusPlayerIDChange: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoundInput);
