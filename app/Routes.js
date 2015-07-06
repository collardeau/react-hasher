import React from 'react';
import Router from './Router';

export default class Routes extends React.Component {

  render(){
    return (
      <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#/about">About</a></li>
          <li><a href="#/user/123">User/123</a></li>
        </ul>
        <p>Route: { this.props.route || '/' }</p>
        <p>Params: { this.props.params }</p>
      </div>
    );
  }
}

React.render(
  <Router>
    <Routes />
  </Router>,
    document.getElementById('app')
);

