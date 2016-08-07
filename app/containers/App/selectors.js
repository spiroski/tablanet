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
    canUndo: globalState.past.length > 0,
    canRedo: globalState.future.length > 0,
  })
);

const selectPlayers = () => createSelector(
  selectGlobal(), (globalState) => globalState.present.get('players')
);

export {
  selectLocationState,
  selectGlobal,
  selectPlayers,
  selectHistory,
};
