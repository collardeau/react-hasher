import React from 'react';
import hasher from 'hasher';

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
    return <p><a href="#test">test</a></p>;
  }

  handleChange() {
    console.log('handling hash change');
    this.setState({
      hash: hasher.getHash()
    });
  }

}

React.render(
    <Router />,
    document.getElementById('app')
);

