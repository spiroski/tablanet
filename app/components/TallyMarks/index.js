/**
*
* TallyMarks
*
*/

import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
      <div>
        <IconButton
          style={{
            width: 60,
            height: 60,
            padding: 0,
          }}
          iconStyle={{
            width: 48,
            height: 48,
          }}
          onClick={() => props.onAddMark()}
        >
          <ContentAdd />
        </IconButton>
      </div>
      {groups}
      {leftOverMarks}
    </div>
  );
}

TallyMarks.propTypes = {
  onAddMark: React.PropTypes.func.isRequired,
};

export default TallyMarks;
