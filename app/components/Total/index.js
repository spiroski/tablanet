/**
*
* Total
*
*/

import React from 'react';

import styles from './styles.css';
import { Row, Col } from 'react-bootstrap';

function Total(props) {
  let roundTotal = props.rounds.reduce((round, total) => round + total, 0);
  let marks = props.marks;
  const odd = props.odd;

  const roundTotalContent = (
    <Col xs={4} className="text-left">
      {roundTotal}
    </Col>
  );

  const marksContent = (
    <Col xs={4} className="text-right">{marks}</Col>
  );

  const plusSign = (
    <Col xs={4}>+</Col>
  );

  const subTotalContent = [roundTotalContent, plusSign, marksContent];

  return (
    <div className={styles.total}>
      <hr />
      <Row>
      {odd ? subTotalContent.reverse() : subTotalContent}
      </Row>
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
