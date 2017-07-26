import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Constants
import { EVENTS_ROUTE } from './events.constants';

// Components
import ButtonBackComponent from 'app/shared/buttons/button-back.component';

// Actions
import * as HeaderActions from 'app/shared/header/header.actions';

class EventsContainer extends Component {
  static path = EVENTS_ROUTE

  componentWillMount() {
    this.props.setHeaderButtons(null, <ButtonBackComponent />);
    this.props.headerActions.updateHeaderTitle('React application. Contacts');
  }

  render() {
    return <div>Events container</div>;
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
