import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Edition from '../../components/Edition/Edition'
import deleteImage from '../../assets/delete.png'
import rotateImage from '../../assets/rotate.png'
import moveImage from '../../assets/move.png'

const deleteOption = {
  title: 'Delete',
  image: deleteImage,
}

const rotateOption = {
  title: 'Rotate',
  image: rotateImage,
}
const moveOption = {
  title: 'Move',
  image: moveImage,
}

const state = {
  updateBlock: () => true,
  GameState: {
    machineSelected: 'bla',
    actionSelected: 'Selection',
  },
}
const mockStore = configureStore()
const store = mockStore(state)

storiesOf('Edition', module)
  .add('Empty Edition', () => (
    <Provider store={store}>
      <Edition elements={[]} />
    </Provider>
  ))
  .add('Full Edition', () => (
    <Provider store={store}>
      <Edition elements={[deleteOption, moveOption, rotateOption]} />
    </Provider>
  ))
