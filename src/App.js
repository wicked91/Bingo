import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Start from './components/Start';
import OnePlayerBoard from './components/OnePlayerBoard';
import TwoPlayerBoard from './components/TwoPlayerBoard';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Start />
          <br/>
          <h3>Player One</h3>
          <OnePlayerBoard />
          <br/>
          <h3>Player Two</h3>
          <TwoPlayerBoard />
        </div>
      </Provider>
    )
  }
}
export default App;
