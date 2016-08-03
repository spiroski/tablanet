/**
*
* TallyMarks
*
*/

import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap/';

import styles from './styles.css';

function TallyMarks(props) {
  const marks = props.marks;
  const numberOfGroups = parseInt(marks / 5, 10);
  let groups = [];
  for (let i = 0; i < numberOfGroups; i++) {
    groups.push(
      <p className={styles.groupOfFive} key={i}>||||</p>
    );
  }
  let leftOverMarks = [];
  for (let i = 0; i < marks % 5; i++) {
    groups.push('|');
  }

  return (
    <div className={styles.tallyMarks}>
      <Button bsSize="lg" onClick={() => props.onAddMark()}>
        <Glyphicon glyph="plus" />
      </Button>
      <br /> {groups}
      {leftOverMarks}
    </div>
  );
}

TallyMarks.propTypes = {
  onAddMark: React.PropTypes.func.isRequired,
};

export default TallyMarks;
