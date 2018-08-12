import React, { Component } from 'react';
import './App.css';


import Main from './container/containers_mainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="page-title">Welcome to Employee Portal</h1>
        <Main />
      </div>
    );
  }
}

export default App;
