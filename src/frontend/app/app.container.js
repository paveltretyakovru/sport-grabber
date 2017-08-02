// Core imports
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';

import DevTools from './shared/devtools';
import HeaderContainer from './shared/header/header.container';
import LeftMenuComponent from './shared/left-menu.component';
import ButtonMenuComponent from './shared/buttons/button-menu.component';

import * as AppActions from './app.actions';
import * as eventsActions from './pages/events/events.actions';
import { routeToContacts } from './pages/contacts/contacts.actions';

import './app.container.css';

class App extends Component {
  static path = '/';

  constructor(props) {
    super(props);

    this.state = {
      headerButtonLeft: null,
      headerButtonRight: null,
    }
  }

  componentWillMount() {
    injectTapEventPlugin();
  }

  componentDidMount() {
    this.props.eventsActions.fetchEventsPage();
  }

  render() {
    let menuItems = [
      {
        title: 'Contacts',
        routeDispatch: this.props.routeActions.routeToContacts,
      },
    ];

    return(<MuiThemeProvider>
      <div id="app-container" className="container">
        <LeftMenuComponent
          items={menuItems}
          isOpen={this.props.app.isLeftMenuOpen}
          handleSwitch={this.props.appActions.switchLeftMenu}
        />

        <HeaderContainer
          buttonLeft={this.state.headerButtonLeft}
          buttonRight={this.state.headerButtonRight}
        />

        <main className="row">
          <div id="app-content" className="col-xs-12 col-md-12">
            {/* { this.props.children } */}
            {
              React.cloneElement(
                this.props.children,
                {
                  setHeaderButtons: ::this.setHeaderButtons,
                  setHeaderButtonLeft: ::this.setHeaderButtonLeft,
                  setHeaderButtonRight: ::this.setHeaderButtonRight,
                }
              )
            }
          </div>
        </main>
        { NODE_ENV === 'development' ? <DevTools /> : null }
      </div>
    </MuiThemeProvider>);
  }

  setHeaderButtons(headerButtonLeft, headerButtonRight) {
    let leftButton = headerButtonLeft ? headerButtonLeft : <ButtonMenuComponent handleCLick={this.props.appActions.switchLeftMenu} />;

    this.setState({
      ...this.state,
      headerButtonLeft: leftButton,
      headerButtonRight: headerButtonRight,
    });
  }

  setHeaderButtonLeft(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonLeft: button }, callback);
  }

  setHeaderButtonRight(button, callback = () => {}) {
    this.setState({ ...this.state, headerButtonRight: button }, callback);
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDisptachToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    routeActions: bindActionCreators({routeToContacts}, dispatch),
    eventsActions: bindActionCreators(eventsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(App);
