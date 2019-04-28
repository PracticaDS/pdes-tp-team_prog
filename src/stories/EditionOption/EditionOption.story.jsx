import React from 'react'

import { storiesOf } from '@storybook/react'

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

storiesOf('EditionOption', module)
  .add('Delete Option', () => <EditionOption editionOption={deleteOption} />)
  .add('Rotate Option', () => <EditionOption editionOption={rotateOption} />)
  .add('Move Option', () => <EditionOption editionOption={moveOption} />)
