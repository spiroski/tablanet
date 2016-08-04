/* eslint prefer-template: "off"*/
import React from 'react';

import styles from './styles.css';

import TextField from 'material-ui/TextField';

class PlayerName extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onChangeName = (evt, value) => {
    this.props.onChangeName(this.props.playerID, value);
  }

  render() {
    return (
      <div className={styles.playerName}>
        <TextField name={'playerName-' + this.props.playerID} value={this.props.name} onChange={this.onChangeName} fullWidth inputStyle={{ textAlign: 'center' }} />
      </div>
    );
  }
}

PlayerName.propTypes = {
  onChangeName: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  playerID: React.PropTypes.number.isRequired,
};

export default PlayerName;
