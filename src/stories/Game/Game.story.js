/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Game from '../../components/Game/Game'

// n columns, m rows
storiesOf('Game', module).add('Simple Game component', () => (
  <Game restartCurrency={() => 2} startGame={() => 1} dimensions={{ n: 6, m: 6 }} />
))
