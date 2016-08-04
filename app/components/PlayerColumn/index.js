/**
*
* PlayerColumn
*
*/

import React from 'react';

import styles from './styles.css';

import Score from 'components/Score';
import PlayerName from 'components/PlayerName';

class PlayerColumn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const player = this.props.player;
    return (
      <div className={styles.playerColumn}>
        <PlayerName
          name={player.name} playerID={player.id} onChangeName={this.props.onChangeName}
        />
        <Score player={player} onAddMark={this.props.onAddMark} />
      </div>
    );
  }
}

PlayerColumn.propTypes = {
  player: React.PropTypes.any.isRequired,
  onChangeName: React.PropTypes.func.isRequired,
  onAddMark: React.PropTypes.func.isRequired,
};

export default PlayerColumn;
