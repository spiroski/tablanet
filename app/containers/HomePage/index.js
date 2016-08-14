/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo-immutable';

import TopAppBar from 'components/TopAppBar';
import ScoreBoard from 'components/ScoreBoard';
import NewRoundInput from 'containers/NewRoundInput';

import { addMark, addRound, changeName, newGame } from 'containers/App/actions';

import { selectPlayers, selectHistory } from 'containers/App/selectors';

import { createStructuredSelector } from 'reselect';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let player1 = this.props.players.get(0).toJS();
    let player2 = this.props.players.get(1).toJS();
    return (
      <div>
        <TopAppBar
          onNewGame={this.props.onNewGame}
          onUndo={this.props.onUndo}
          onRedo={this.props.onRedo}
          canUndo={this.props.history.canUndo}
          canRedo={this.props.history.canRedo}
        />
        <ScoreBoard player1={player1} player2={player2} onAddMark={this.props.onAddMark} onAddRound={this.props.onAddRound} onChangeName={this.props.onChangeName} />
        <NewRoundInput onAddRound={this.props.onAddRound} />
      </div>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onNewGame: () => dispatch(newGame()),
    onUndo: () => dispatch(ActionCreators.undo()),
    onRedo: () => dispatch(ActionCreators.redo()),
    onAddMark: (playerID) => dispatch(addMark(playerID)),
    onAddRound: (round) => dispatch(addRound(round)),
    onChangeName: (playerID, name) => dispatch(changeName(playerID, name)),
  };
}

const mapStateToProps = createStructuredSelector({
  players: selectPlayers(),
  history: selectHistory(),
});

HomePage.propTypes = {
  players: React.PropTypes.any.isRequired,
  history: React.PropTypes.any.isRequired,
  onNewGame: React.PropTypes.func.isRequired,
  onUndo: React.PropTypes.func.isRequired,
  onRedo: React.PropTypes.func.isRequired,
  onAddMark: React.PropTypes.func.isRequired,
  onAddRound: React.PropTypes.func.isRequired,
  onChangeName: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
