/**
*
* BonusPlayerIdchooser
*
*/

import React from 'react';
import styles from './styles.css';
import RaisedButton from 'material-ui/RaisedButton';

function BonusPlayerIDChooser(props) {
  const generateButtonFor = playerID => (
    <RaisedButton
      primary={playerID === props.value}
      className={styles.button}
      label={playerID !== null ? '+3' : '0'}
      onClick={() => props.onChange(playerID)}
    />
  );

  return (
    <div className={styles.container}>
      {generateButtonFor(props.player1ID)}
      {generateButtonFor(null)}
      {generateButtonFor(props.player2ID)}
    </div>
  );
}

BonusPlayerIDChooser.propTypes = {
  value: React.PropTypes.any,
  onChange: React.PropTypes.func.isRequired,
  player1ID: React.PropTypes.number.isRequired,
  player2ID: React.PropTypes.number.isRequired,
};

export default BonusPlayerIDChooser;
