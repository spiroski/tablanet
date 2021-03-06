import {
  createSelector,
} from 'reselect';

const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectGlobal = () => (state) => state.get('global');

const selectHistory = () => createSelector(
  selectGlobal(), globalState => ({
    canUndo: globalState.get('past').size > 0,
    canRedo: globalState.get('future').size > 0,
  })
);

const selectPlayers = () => createSelector(
  selectGlobal(), (globalState) => globalState.get('present').get('players')
);

const selectTotals = () => createSelector(
  selectPlayers(), (players) => players.map((player) => {
    const rounds = player.get('rounds').reduce((round, total) => round + total, 0);
    const marks = player.get('marks');
    return {
      rounds,
      marks,
      total: rounds + marks,
    };
  }).toJS()
);

export {
  selectLocationState,
  selectGlobal,
  selectPlayers,
  selectHistory,
  selectTotals,
};
