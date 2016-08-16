import {
    fromJS,
} from 'immutable';
import {
    SHOW,
    HIDE,
    ROUND_SCORE_CHANGE,
    BONUS_PLAYERID_CHANGE,
    RESET,
} from './constants';

const initialState = fromJS({
  shown: false,
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
    case SHOW:
      return state.set('shown', true);
    case HIDE:
      return state.set('shown', false);
    case RESET:
      return initialState;
    case ROUND_SCORE_CHANGE:
      return state.set('round', action.round);
    case BONUS_PLAYERID_CHANGE:
      return state.set('bonusPlayerID', action.bonusPlayerID);
    default:
      return state;
  }
}

export default newRoundInputReducer;
