/**
*
* Total
*
*/

import React from 'react';

import styles from './styles.css';
function Total(props) {
  let roundTotal = props.rounds.reduce((round, total) => round + total, 0);
  let marks = props.marks;
  const odd = (props.odd !== undefined);

  const roundTotalContent = key => (
    <div className={odd ? styles.textRight : styles.textLeft} key={key}>
      {roundTotal}
    </div>
  );

  const marksContent = key => (
    <div className={odd ? styles.textLeft : styles.textRight} key={key}>{marks}</div>
  );

  const plusSign = key => (
    <div key={key}>+</div>
  );

  const subTotalContent = [roundTotalContent(0), plusSign(1), marksContent(2)];

  return (
    <div className={styles.total}>
      <hr />
      {odd ? subTotalContent.reverse() : subTotalContent}
      <hr />
      <h3>{roundTotal + marks}</h3>
    </div>
	);
}

Total.propTypes = {
  rounds: React.PropTypes.any.isRequired,
  marks: React.PropTypes.number.isRequired,
  odd: React.PropTypes.any,
};

export default Total;
