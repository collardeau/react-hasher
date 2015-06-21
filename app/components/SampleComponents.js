import React from 'react';

export class Header extends React.Component {
  render() {
    return <h1>Header</h1>;
  }
}

export class Browse extends React.Component {
  render() {
    return (
      <div>
        <h3>This is the Browse View</h3>
          Go to: <a href='#about'>About</a>
      </div>
    );
  }
}

export class About extends React.Component {
 render() {
    return (
      <div>
        <h3>This is the About View</h3>
        Go to: <a href='#browse'>Browse</a>
     </div>
    );
  }
}

export class Error404 extends React.Component {
 render() {
    return (
      <div>
        <h3>This is the 404 Error View</h3>
        Go to: <a href='#browse'>Browse</a>
     </div>
    );
  }
}

