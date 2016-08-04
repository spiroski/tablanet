/**
*
* Round
*
*/

import React from 'react';

import styles from './styles.css';

function Round(props) {
  return (
    <div className={styles.round}>
      {props.round}
    </div>
  );
}

Round.propTypes = {
  round: React.PropTypes.any.isRequired,
};

export default Round;
