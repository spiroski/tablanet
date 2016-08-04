import React from 'react';
import Slider from 'material-ui/Slider';

function RoundScoreSlider(props) {
  const calculatePlayer2Score = (player1Score) => 22 - player1Score;

  let onChange = (event, p1) => {
    if (!props.onScoreChange) {
      return;
    }

    props.onScoreChange(p1, calculatePlayer2Score(p1));
  };

  return <Slider step={1} min={0} max={22} value={props.value} onChange={onChange} sliderStyle={{ marginBottom: '24px' }} />;
}

RoundScoreSlider.propTypes = {
  onScoreChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.number.isRequired,
};

export default RoundScoreSlider;
