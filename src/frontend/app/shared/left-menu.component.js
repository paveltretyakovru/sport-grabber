import React, {Component} from 'react';

// Material-ui components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftMenuComponent extends Component {
  render() {
    let itemsList = this.props.items.map((item, index) => {
      return(
        <MenuItem
          key={index}
          onTouchTap={() => { this.handleClickMenuItem(item) }}
        >
          {item.title}
        </MenuItem>
      );
    });
    
    return(
      <Drawer
        open={this.props.isOpen}
        docked={false}
        onRequestChange={this.props.handleSwitch}
      >
        {itemsList}
      </Drawer>
    )
  }

  handleClickMenuItem(itemData) {
    itemData.routeDispatch();
    this.props.handleSwitch();
  }
}

export default LeftMenuComponent;