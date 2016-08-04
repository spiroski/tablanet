/**
 *
 * ScoreBoard
 *
 */

import React from 'react';

import styles from './styles.css';

import PlayerColumn from 'components/PlayerColumn';
import Total from 'components/Total';

class ScoreBoard extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.scoreBoard}>
        <div>
          <div className={styles.column}>
            < PlayerColumn player={this.props.player1} onAddMark={this.props.onAddMark} onChangeName={this.props.onChangeName} />
          </div>
          <div className={styles.column}>
            < PlayerColumn player={this.props.player2} onAddMark={this.props.onAddMark} onChangeName={this.props.onChangeName} />
          </div>
        </div>
        <div>
          <div className={styles.column}>
            <Total rounds={this.props.player1.rounds} marks={this.props.player1.marks} />
          </div>
          <div className={styles.column}>
            <Total rounds={this.props.player2.rounds} marks={this.props.player2.marks} odd />
          </div>
        </div>
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
