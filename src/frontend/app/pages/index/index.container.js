import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as AppActions from 'app/app.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

// Material-ui components
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridList, GridTile} from 'material-ui/GridList';

const tilesData = [
  {
    img: 'https://sportivnye-prognozy.ru/wp-content/uploads/2017/07/xmajer-kuznetsov-200x200.png.pagespeed.ic.xnTENWx3wn.webp',
    title: 'Суареш-Наварро — Мертенс. 27.07.2017',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://sportivnye-prognozy.ru/wp-content/uploads/2017/07/xsuaresh-navarro-mertens-200x200.png.pagespeed.ic.iPPcJyMMuy.webp',
    title: 'Севастова — Куличкова. 26.07.2017',
    author: 'pashminu',
    featured: true,    
  },
  {
    img: 'https://sportivnye-prognozy.ru/wp-content/uploads/2017/07/xbarcelona-200x200.png.pagespeed.ic.SihhFFHBnx.webp',
    title: 'Майер — Кузнецов. 26.07.2017',
    author: 'Danson67',
  },
];

const styles = {
  gridTile: {
    marginTop: 16,
    marginBottom: 16,
  },
  gridTileTitle: {
    fontSize: '13px',
  },
  gridImage: {
    width: '100%',
  },
};

export class IndexContainer extends Component {
  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle('Sport-grabber');
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
          <GridList cols={1}>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                style={styles.gridTile}
                titleStyle={styles.gridTileTitle}
                actionIcon={favoriteButton}
                actionPosition="left"
                titlePosition="top"
                
                onTouchTap={(event) => {
                  this.handleTileClick(event);
                }}
              >
                <img src={tile.img} style={styles.gridImage} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }

  handleTileClick(event) {
    console.log('Hello tile', event);
  }

  handleFavoriteClick(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log('Favorite click', event);
  }
}

function mapStateToProps(state) {
  return {
    mainAuthor: state.mainAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);
