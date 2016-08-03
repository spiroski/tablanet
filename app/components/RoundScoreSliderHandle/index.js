/* eslint prefer-template: "off"*/
import React from 'react';

const handleStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
  padding: '20px',
  border: '2px solid #abe2fb',
  borderRadius: '50%',
  background: '#fff',
  fontSize: '14px',
  textAlign: 'center',
  zIndex: 3,
};

function RoundScoreSliderHandle(props) {
  const style = Object.assign({
    left: props.offset + '%',
  }, handleStyle);
  return (
    <div style={style}></div>
  );
}

RoundScoreSliderHandle.propTypes = {
  offset: React.PropTypes.any,
};

export default RoundScoreSliderHandle;
