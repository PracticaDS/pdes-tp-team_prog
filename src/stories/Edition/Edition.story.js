/* eslint-disable react/jsx-filename-extension */
import React from 'react'

import { storiesOf } from '@storybook/react'

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

storiesOf('Edition', module)
  .add('Empty Edition', () => <Edition elements={[]} />)
  .add('Full Edition', () => <Edition elements={[deleteOption, moveOption, rotateOption]} />)
