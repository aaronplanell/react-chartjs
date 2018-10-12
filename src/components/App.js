import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

import Menu from './Menu';
import Graph from './Graph';
import Table from './Table';

const DEFAULT_STATE = { data: {} };

class App extends Component {

  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  componentDidMount() {
    const data = require('../data/data.json');
    this.setState({ data });
  }

  componentWillUnmount() {
    this.setState(DEFAULT_STATE);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="app">
        <Menu />
        <div className="wrapper">
          <Graph data={data}/>
          <Table data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
