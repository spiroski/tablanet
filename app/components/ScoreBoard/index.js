/**
 *
 * ScoreBoard
 *
 */

import React from 'react';

import styles from './styles.css';

import PlayerColumn from 'components/PlayerColumn';
import Total from 'components/Total';

import { Grid, Row, Col } from 'react-bootstrap/lib';

class ScoreBoard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.scoreBoard}>
        <Grid>
          <Row>
            <Col xs={6}>
              < PlayerColumn player={this.props.player1} onAddMark={this.props.onAddMark} onChangeName={this.props.onChangeName} />
            </Col>
            <Col xs={6}>
              < PlayerColumn player={this.props.player2} onAddMark={this.props.onAddMark} onChangeName={this.props.onChangeName} />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Total rounds={this.props.player1.rounds} marks={this.props.player1.marks} />
            </Col>
            <Col xs={6}>
              <Total rounds={this.props.player2.rounds} marks={this.props.player2.marks} odd />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

ScoreBoard.propTypes = {
  player1: React.PropTypes.any.isRequired,
  player2: React.PropTypes.any.isRequired,
  onAddMark: React.PropTypes.func.isRequired,
  onChangeName: React.PropTypes.func.isRequired,
};

export default ScoreBoard;
