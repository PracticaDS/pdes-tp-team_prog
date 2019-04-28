import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import EditionOption from '../../components/EditionOption/EditionOption'
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

storiesOf('EditionOption', module)
  .add('Delete Option', () => (
    <Provider store={store}>
      <EditionOption editionOption={deleteOption} />
    </Provider>
  ))
  .add('Rotate Option', () => (
    <Provider store={store}>
      <EditionOption editionOption={rotateOption} />
    </Provider>
  ))
  .add('Move Option', () => (
    <Provider store={store}>
      <EditionOption editionOption={moveOption} />
    </Provider>
  ))
