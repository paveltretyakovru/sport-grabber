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
    this.props.headerActions.updateHeaderTitle('React application. Contacts');
  }

  componentDidMount() {
    this.props.eventsActions.fetchEventPost(this.props.params.id);
  }

  render() {
    return(
      <Card>
        <CardHeader
          title="Суареш-Наварро - Мертенс"
          subtitle="27.07.2017"
        />
        <CardMedia>
          <img src="https://sportivnye-prognozy.ru/wp-content/uploads/2017/07/xmajer-kuznetsov-200x200.png.pagespeed.ic.xnTENWx3wn.webp" alt="" />
        </CardMedia>
        <CardTitle title="Ставка - победа Боруссии Дортмунд" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    );
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
    eventsActions: bindActionCreators(eventsActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
