import {
    createSelector,
} from 'reselect';

/**
 * Direct selector to the newRoundInput state domain
 */
const selectNewRoundInputDomain = () => state => state.get('newRoundInput');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewRoundInput
 */

const selectNewRoundInput = () => createSelector(
    selectNewRoundInputDomain(),
    (substate) => substate.toJS()
);

const selectPlayers = () => createSelector(
    selectNewRoundInput(), (substate) => ([{
      playerID: substate.round[0].playerID,
      score: substate.round[0].playerID === substate.bonusPlayerID ? substate.round[0].score + 3 : substate.round[0].score,
      hasBonuPoints: substate.round[0].playerID === substate.bonusPlayerID,
    }, {
      playerID: substate.round[1].playerID,
      score: substate.round[1].playerID === substate.bonusPlayerID ? substate.round[1].score + 3 : substate.round[1].score,
      hasBonuPoints: substate.round[1].playerID === substate.bonusPlayerID,
    }])
);

const selectBonusPlayerID = () => createSelector(
    selectNewRoundInput(), (substate) => substate.bonusPlayerID

);

export default selectNewRoundInput;
export {
    selectNewRoundInputDomain,
    selectPlayers,
    selectBonusPlayerID,
};
