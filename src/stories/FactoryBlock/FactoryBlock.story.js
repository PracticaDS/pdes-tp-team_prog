/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Block from '../../components/FactoryBlock/Block'

storiesOf('FactoryBlock', module).add('Simple EmptyBlock', () => (
  <Block position={{ row: 1, column: 1 }} />
))
