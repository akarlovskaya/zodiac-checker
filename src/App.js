import React, { Component } from 'react';
import styles from './App.module.scss';
import Inputs from './components/Inputs/Inputs';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
          <h1>Title here</h1>

          <Inputs />
      </div>
    );
  }
}

export default App;
