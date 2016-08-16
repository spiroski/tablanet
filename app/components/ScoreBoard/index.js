/**
 *
 * ScoreBoard
 *
 */

import React from 'react';

import styles from './styles.css';

import PlayerColumn from 'components/PlayerColumn';

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
