import React, { Component } from 'react';

export default class Page404Component extends Component {
  render() {
    let imgStyle = { width: '50%' }

    return(<div>
      <h1>Ooops. Page not founded!</h1>
      <img
        src="https://s-media-cache-ak0.pinimg.com/736x/c5/a5/b7/c5a5b799afe657511ab9360f04ec9150.jpg"
        style={imgStyle}
      />
    </div>);
  }
}