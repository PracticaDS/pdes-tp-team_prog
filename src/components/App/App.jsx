import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../store/ReduxStore'
import Game from '../Game/Game'
import './App.css'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    )
  }
}

export default App
