import React from 'react';

import styles from './styles.css';

import Rcslider from 'rc-slider';
import RoundScoreSliderHandle from 'components/RoundScoreSliderHandle';
import 'rc-slider/assets/index.css';

function RoundScoreSlider(props) {
  const calculatePlayer2Score = (player1Score) => 22 - player1Score;

  let onChange = (p1) => {
    if (!props.onScoreChange) {
      return;
    }

    props.onScoreChange(p1, calculatePlayer2Score(p1));
  };
  return (
    <div className={styles.roundScoreSlider}>
      <Rcslider min={0} max={22} tipFormatter={null} onChange={onChange} value={props.value} handle={< RoundScoreSliderHandle />} />
    </div>
  );
}

RoundScoreSlider.propTypes = {
  onScoreChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.number.isRequired,
};

export default RoundScoreSlider;
