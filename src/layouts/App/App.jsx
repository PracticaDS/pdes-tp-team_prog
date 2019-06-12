import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import configureStore from '../../store/ReduxStore'
import GameConnected from '../../components/Game/GameConnected'
import Login from '../../components/Login/Login'
import Home from '../Home/Home'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/game" exact component={GameConnected} />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
