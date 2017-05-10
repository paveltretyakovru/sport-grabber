import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import React, { Component } from 'react';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class ButtonMenuComponent extends Component {
  render() {
    let handleCLick = this.props.handleCLick;

    return(<IconButton
      className="animated rotateIn"
      tooltip="Open menu"
      onTouchTap={handleCLick}
      style={{
        paddingButton: 8,
      }}
    >
      <NavigationMenu color={white} />
    </IconButton>);
  }
}

export default ButtonMenuComponent;