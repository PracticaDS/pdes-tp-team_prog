import React from 'react'
import { storiesOf } from '@storybook/react'
import Detail from '../../components/Detail/Detail'

storiesOf('Detail', module)
  .add('with no name, cost and frequency', () => <Detail />)
  .add('with name equals to Starter cost equals to 1000 and frequency equals to 1', () => (
    <Detail name="Starter" cost={1000} frequency={1} />
  ))
