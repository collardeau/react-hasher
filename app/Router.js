import React from 'react';
import hasher from 'hasher';

import App from './App';

class Router extends React.Component {

  constructor() { super();
    hasher.init();
    this.state = { hash: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    hasher.changed.add(this.handleChange);
    hasher.initialized.add(this.handleChange);
  }

  render () {
    return (
      <App route={this.state.hash} />
    );
  }

  handleChange() {
    this.setState({
      hash: hasher.getHash()
    });
  }

}

React.render(
    <Router />,
    document.getElementById('app')
);

