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

import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
  ButtonGroup,
} from 'react-bootstrap/lib';

import RoundScoreSlider from 'components/RoundScoreSlider';

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
      <div className={styles.newRoundInput}>
        <Form onSubmit={this.onAdd} bsSize="lg">
          <Grid>
            <Row>
              <Col xs={6}>
                <FormGroup bsSize="lg">
                  <FormControl.Static>
                    {player1.score}
                  </FormControl.Static>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup bsSize="lg">
                  <FormControl.Static>
                    {player2.score}
                  </FormControl.Static>
                </FormGroup>
              </Col>
            </Row>
            <RoundScoreSlider
              onScoreChange={this.setScore} value={player1.hasBonuPoints
              ? player1.score - 3
              : player1.score}
            />
            <br />
            <ButtonGroup justified bsSize="lg">
              <Button
                href="#"
                onClick={() => this.setBonusPlayerID(player1.playerID)} className={player1.hasBonuPoints
                ? 'active'
                : ''}
              >
                +3
              </Button>
              <Button
                href="#"
                onClick={() => this.setBonusPlayerID(null)} className={player1.hasBonuPoints === player2.hasBonuPoints
                ? 'active'
                : ''}
              >
                +0
              </Button>
              <Button
                href="#"
                onClick={() => this.setBonusPlayerID(player2.playerID)} className={player2.hasBonuPoints
                ? 'active'
                : ''}
              >
                +3
              </Button>
            </ButtonGroup>
            <br />
            <Row>
              <Col xs={12}>
                <Button block bsStyle="success" bsSize="lg" type="submit">Add Score</Button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </div>
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
  bonusPlayerID: React.PropTypes.any.isRequired,
  onAddRound: React.PropTypes.func.isRequired,
  onRoundScoreChange: React.PropTypes.func.isRequired,
  onBonusPlayerIDChange: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewRoundInput);
