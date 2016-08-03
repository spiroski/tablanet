import {
    ROUND_SCORE_CHANGE,
    BONUS_PLAYERID_CHANGE,
    RESET,
} from './constants';

export function resetAction() {
  return {
    type: RESET,
  };
}

export function roundScoreChangeAction(round) {
  return {
    type: ROUND_SCORE_CHANGE,
    round,
  };
}

export function bonusPlayerIDChangeAction(bonusPlayerID) {
  return {
    type: BONUS_PLAYERID_CHANGE,
    bonusPlayerID,
  };
}
