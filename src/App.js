import React, { Component } from 'react';
import './resources/styles.css';

//COMPONENTS
import Header from './components/header_footer/Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
