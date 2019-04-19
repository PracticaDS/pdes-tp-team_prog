/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { storiesOf } from '@storybook/react'
import ResourcesBar from '../../components/Resources/ResourcesBar'

storiesOf('Resources bar', module).add('Simple Resources bar', () => (
  <ResourcesBar currency={10000000} />
))
