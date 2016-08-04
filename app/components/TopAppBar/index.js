/**
*
* TopAppBar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';

import ContentUndo from 'material-ui/svg-icons/content/undo';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


function TopAppBar(props) {
  return (
    <div>
      <AppBar
        showMenuIconButton={false}
        style={{
          position: 'fixed',
        }}
        title="Tablanet"
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Undo" leftIcon={<ContentUndo />} />
            <Divider />
            <MenuItem primaryText="New Game" leftIcon={<NavigationRefresh />} onClick={props.onNewGame} />
          </IconMenu>
       }
      />
    </div>
  );
}

TopAppBar.propTypes = {
  onNewGame: React.PropTypes.func.isRequired,
};

export default TopAppBar;
