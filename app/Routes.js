import React from 'react';
import Router from './Router';

export default class Routes extends React.Component {

  render(){
    console.log(this.props.route);
    return (
      <div>
        <h1>routes</h1>
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

