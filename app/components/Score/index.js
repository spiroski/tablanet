/**
*
* Score
*
*/

import React from 'react';

import styles from './styles.css';
import RoundList from 'components/RoundList';
import TallyMarks from 'components/TallyMarks';

function Score(props) {
  const player = props.player;
  let odd = player.id % 2;

  const roundListColumn = key => (
    <div key={key}>
      <RoundList rounds={player.rounds} odd={odd} />
    </div>
  );

  const tallyMarksColumn = key => (
    <div key={key}>
      <TallyMarks marks={player.marks} onAddMark={() => props.onAddMark(player.id)} />
    </div>
  );

  let content = [];
  if (odd) {
    content.push(tallyMarksColumn(0));
    content.push(roundListColumn(1));
  } else {
    content.push(roundListColumn(0));
    content.push(tallyMarksColumn(1));
  }

  return (
    <div className={styles.score}>
      {content}
    </div>
  );
}

Score.propTypes = {
  onAddMark: React.PropTypes.func.isRequired,
  player: React.PropTypes.any.isRequired,
};

export default Score;
