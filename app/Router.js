import React from 'react';
import hasher from 'hasher';

export default class Router extends React.Component {

  handleChange() {
    let hash = hasher.getHash();
    let parts = hash.split('/');
    this.setState({
      route: parts.shift(),
      params: parts
    });
  }

  constructor() {
    super();
    hasher.init();
    this.state = { route: 'test', params: ['parma1'] };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    hasher.changed.add(this.handleChange);
    hasher.initialized.add(this.handleChange);
  }

  render () {
    console.log(this.state);
    return (
      <div route={this.state.route}>
        {this.props.children}
      </div>
    );
  }

}


