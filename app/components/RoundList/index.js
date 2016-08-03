import React from 'react';

import styles from './styles.css';
import Round from 'components/Round';

function RoundList(props) {
  const rounds = props.rounds;
  const odd = props.odd;
  let className = odd
    ? styles.roundList
    : '{styles.roundList} {styles.roundListOdd}';
  return (
    <div className={className}>
      {rounds.map((round, index) => <Round round={round} key={index} />)}
    </div>
  );
}

RoundList.propTypes = {
  rounds: React.PropTypes.any.isRequired,
  odd: React.PropTypes.any,
};

export default RoundList;
