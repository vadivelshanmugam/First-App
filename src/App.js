import React, { Component } from 'react';
import './App.css';
import CartItem from './CartItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CartItem />
      </div>
    );
  }
}

export default App;
