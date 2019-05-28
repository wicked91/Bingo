import React, { Component } from 'react'
import { Provider } from 'react-redux';
import Start from './components/Start';
import Board from './components/Board';
import Bingo from './components/Bingo';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Start />
          <Board/>
          <Bingo/>
        </div>
      </Provider>
    )
  }
}
export default App;
