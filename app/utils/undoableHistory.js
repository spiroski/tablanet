import { Record, List, fromJS } from 'immutable';

const StateHistory = new Record({
  past: new List(),
  present: undefined,
  _lastInterestingPresent: undefined,
  future: new List(),
});

const undoableHistory = (history) => new StateHistory(fromJS(history));

export default undoableHistory;
