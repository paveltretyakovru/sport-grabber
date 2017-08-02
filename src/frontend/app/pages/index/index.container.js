import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

// CSS
import './index.container.css';

// Constants
import { INDEX_PAGE_TITLE, noImageUrl } from './index.constants';

// Actions
import * as AppActions from 'app/app.actions';
import * as HeaderActions from 'app/shared/header/header.actions';
import * as indexActions from './index.actions';
import {
  routeToEvents,
  fetchEventsPage,
  fetchMorePage,
} from 'app/pages/events/events.actions';

// Material-ui components
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

export class IndexContainer extends Component {
  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(INDEX_PAGE_TITLE);
    }
  }

  render() {
    const favoriteButton = <IconButton
      onTouchTap={::this.handleFavoriteClick}
    >
      <StarBorder color="white" />
    </IconButton>;

    return (
      <div className="row center-md center-sm center-xs">
        <div className="col-md-4 col-sm-5 col-xs-12">
          <GridList cols={1} padding={16} className="grid-list">
            {this.props.events.collection.map((event, index) => (
              <GridTile
                key={event.id || index}
                title={
                  (event.title)
                  ? event.title.replaceAll('Прогноз на матч', '')
                  : ''
                }
                titleStyle={{fontSize: '13px'}}
                actionIcon={favoriteButton}
                titlePosition="top"
                actionPosition="left"
                
                onTouchTap={(e) => {
                  console.log('touch', event);
                  this.handleTileClick(e, event.id);
                }}
              >
                <img src={event.img || noImageUrl} className="grid-image" />
              </GridTile>
            ))}
          </GridList>
          <FlatButton
            label="Загрузить больше"
            secondary={true}
            onTouchTap={::this.handleMoreClick}
          />
        </div>
      </div>
    );
  }

  handleTileClick(event, id) {
    this.props.routeActions.routeToEvents(id);
  }

  handleFavoriteClick(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log('Favorite click', event);
  }

  handleMoreClick() {
    this.props.eventsActions.fetchMorePage(++this.props.events.loadedPage);
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    mainAuthor: state.mainAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    indexActions: bindActionCreators(indexActions, dispatch),
    routeActions: bindActionCreators({routeToEvents}, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
    eventsActions: bindActionCreators({fetchEventsPage, fetchMorePage}, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
