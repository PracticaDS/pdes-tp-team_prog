import React from 'react'
import { storiesOf } from '@storybook/react'
import Game from '../../components/Game/Game'

const renderNull = () => null

// n columns, m rows
storiesOf('Game', module).add('Simple Game component', () => (
  <Game
    renderNavBar={renderNull}
    renderTicker={renderNull}
    renderResources={renderNull}
    renderLeftPanel={renderNull}
    renderDetail={renderNull}
    renderFactoryGrid={renderNull}
  />
))
