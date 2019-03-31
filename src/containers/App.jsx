import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { Router } from 'react-router-dom';
import theme from 'modules/theme';
import styled, { css, ThemeProvider } from 'styled-components';
import SystemAlerts from 'containers/SystemAlerts';
import { connect } from 'react-redux';
import treeChanges from 'tree-changes';
import { showAlert } from 'actions/index';
import { nextTick } from 'actions/ticker';

const TICK_MINS = 2
const tickTimer = TICK_MINS * 1000

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const MainPrivate = ({ isAuthenticated }) =>
  isAuthenticated &&
  css`
    padding: ${utils.px(headerHeight)} 0 0;
  `;

const Main = styled.main`
  min-height: 100vh;

  ${MainPrivate};
`;

export class App extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  tick = () => {
    const { dispatch } = this.props
    dispatch(nextTick())
    clearInterval(this.timer)
    this.setTimer()
  } 

  setTimer = () => { this.timer = setInterval(this.tick, tickTimer) }

  componentDidMount = () => { this.setTimer() } 

  componentWillUnmount = () => { 
    clearInterval(this.timer)
   }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props
    const { changedTo } = treeChanges(this.props, nextProps)

    /* istanbul ignore else */
    if (changedTo('user.isAuthenticated', true)) {
      dispatch(showAlert('Hello! And welcome!', { variant: 'success', icon: 'bell' }));
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

export default hot(connect(mapStateToProps)(App))
