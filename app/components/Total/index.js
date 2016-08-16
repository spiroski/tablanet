/**
*
* Total
*
*/

import React from 'react';

import styles from './styles.css';
function Total(props) {
  const rounds = props.rounds;
  const marks = props.marks;

  return (
    <div className={styles.total}>
      <hr />
      <h3>{rounds + marks}</h3>
    </div>
	);
}

Total.propTypes = {
  rounds: React.PropTypes.any.isRequired,
  marks: React.PropTypes.number.isRequired,
};

export default Total;
