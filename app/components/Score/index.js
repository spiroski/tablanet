/**
*
* Score
*
*/

import React from 'react';

import styles from './styles.css';
import RoundList from 'components/RoundList';
import TallyMarks from 'components/TallyMarks';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

function Score(props) {
  const player = props.player;
  let odd = player.id % 2;

  const roundListColumn = (
    <Col xs={6}>
      <RoundList rounds={player.rounds} odd={odd} />
    </Col>
  );

  const tallyMarksColumn = (
    <Col xs={6}>
      <TallyMarks marks={player.marks} onAddMark={() => props.onAddMark(player.id)} />
    </Col>
  );

  let content = [];
  if (odd) {
    content.push(tallyMarksColumn);
    content.push(roundListColumn);
  } else {
    content.push(roundListColumn);
    content.push(tallyMarksColumn);
  }

  return (
    <div className={styles.score}>
      <Row>
        {content}
      </Row>
    </div>
  );
}

Score.propTypes = {
  onAddMark: React.PropTypes.func.isRequired,
};

export default Score;
