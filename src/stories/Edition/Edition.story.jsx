import React from 'react'
import { storiesOf } from '@storybook/react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Edition from '../../components/Edition/Edition'
import deleteImage from '../../assets/options/delete.png'
import rotateImage from '../../assets/options/rotate.png'
import moveImage from '../../assets/options/move.png'
import EditionOptionConnected from '../../components/EditionOption/EditionOptionConnected'

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
const renderOption = edition => <EditionOptionConnected editionOption={edition} />

storiesOf('Edition', module)
  .add('Empty Edition', () => (
    <Provider store={store}>
      <Edition elements={[]} renderOption={renderOption} />
    </Provider>
  ))
  .add('Full Edition', () => (
    <Provider store={store}>
      <Edition elements={[deleteOption, moveOption, rotateOption]} renderOption={renderOption} />
    </Provider>
  ))
