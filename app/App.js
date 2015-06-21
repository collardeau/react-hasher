import React from 'react';

export default class App extends React.Component {

  render() {

    switch(this.props.route) {

      case "about":
        return <a href='#home'>Home</a>;

      default:
        return <a href='#about'>About</a>;

    }
  }
}

