import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import ResourcesBar from '../../components/Resources/ResourcesBar'

const mockStore = configureStore()
const state = {
  GameState: {
    currency: 1000,
  },
}
const store = mockStore(state)

storiesOf('Resources bar', module).add('Simple Resources bar', () => <ResourcesBar store={store} />)
