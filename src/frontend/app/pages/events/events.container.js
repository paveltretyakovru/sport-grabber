import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// Constants
import { EVENTS_ROUTE } from './events.constants';

// Components
import ButtonBackComponent from 'app/shared/buttons/button-back.component';

// Actions
import * as HeaderActions from 'app/shared/header/header.actions';
import * as eventsActions from './events.actions';

// Material-ui components
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class EventsContainer extends Component {
  static path = EVENTS_ROUTE

  componentWillMount() {
    this.props.setHeaderButtons(null, <ButtonBackComponent />);
    this.props.headerActions.updateHeaderTitle('Событие');
    this.props.eventsActions.clearCurrentPost();
  }

  componentDidMount() {
    console.log('Fetching data');
    this.props.eventsActions.fetchEventPost(this.props.params.id);
  }

  render() {
    return(
      <Card>
        <CardHeader
          title={this.props.current.title}
        />
        <CardMedia>
          <img src={this.props.current.img} alt="" />
        </CardMedia>
        <CardTitle title={this.props.current.rate} />
        <CardText>
          {this.props.current.desc}
        </CardText>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    events: state.events,
    current: state.events.current,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    headerActions: bindActionCreators(HeaderActions, dispatch),
    eventsActions: bindActionCreators(eventsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
