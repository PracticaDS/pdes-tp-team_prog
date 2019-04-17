import React from 'react'

import { storiesOf } from '@storybook/react'

import MachineTypes from './MachineTypes'

storiesOf('MachineTypes', module).add('Empty', () => <MachineTypes elements={[]} />)

storiesOf('MachineTypes', module).add('Single Row not full', () => (
  <MachineTypes elements={['A', 'B', 'C']} />
))

storiesOf('MachineTypes', module).add('Single Row full', () => (
  <MachineTypes elements={['A', 'B', 'C', 'D']} />
))

storiesOf('MachineTypes', module).add("3 Rows, 2 full, last one isn't", () => (
  <MachineTypes elements={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']} />
))
