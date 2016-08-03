import {
    fromJS,
} from 'immutable';
import {
    ROUND_SCORE_CHANGE,
    BONUS_PLAYERID_CHANGE,
    RESET,
} from './constants';

const initialState = fromJS({
  round: [{
    playerID: 0,
    score: 11,
  }, {
    playerID: 1,
    score: 11,
  }],
  bonusPlayerID: null,
});

function newRoundInputReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case ROUND_SCORE_CHANGE:
      return state.setIn(['round'], action.round);
    case BONUS_PLAYERID_CHANGE:
      return state.setIn(['bonusPlayerID'], action.bonusPlayerID);
    default:
      return state;
  }
}

export default newRoundInputReducer;
