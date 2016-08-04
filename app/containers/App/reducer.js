/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  NEW_GAME,
  ADD_MARK,
  ADD_ROUND,
  CHANGE_NAME,
} from './constants';

import {
  fromJS,
} from 'immutable';

// The initial state of the App
const initialState = fromJS({
  players: [{
    id: 0,
    name: 'Player1',
    rounds: [],
    marks: 0,
  }, {
    id: 1,
    name: 'Player2',
    rounds: [],
    marks: 0,
  }],
});

function playerReducer(state, action) {
  let score = 0;
  switch (action.type) {
    case NEW_GAME:
      return state.setIn(['marks'], 0).setIn(['rounds'], fromJS([]));
    case ADD_MARK:
      if (state.get('id') !== action.playerID) {
        return state;
      }
      return state.setIn(['marks'], state.get('marks') + 1);
    case ADD_ROUND:
      action.round.forEach(player => {
        if (state.get('id') === player.playerID) {
          score = player.score;
        }
      });
      return state.setIn(['rounds'], state.get('rounds').push(score));
    case CHANGE_NAME:
      if (state.get('id') !== action.playerID) {
        return state;
      }
      return state.setIn(['name'], action.name);
    default:
      return state;
  }
}

function playersReducer(state, action) {
  switch (action.type) {
    case NEW_GAME:
    case ADD_MARK:
    case ADD_ROUND:
    case CHANGE_NAME:
      return state.map((player) => playerReducer(player, action));
    default:
      return state;

  }
}

function appReducer(state = initialState, action) {
  switch (action.type) {
    case NEW_GAME:
    case ADD_MARK:
    case ADD_ROUND:
    case CHANGE_NAME:
      return state.setIn(['players'], playersReducer(state.get('players'), action));
    default:
      return state;
  }
}

export default appReducer;
