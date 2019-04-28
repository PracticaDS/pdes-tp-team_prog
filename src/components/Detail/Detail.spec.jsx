import React from 'react'
import { mount } from 'enzyme'
import Detail from './Detail'

it('should render a Detail component with the default prop values', () => {
  const detail = mount(<Detail />)

  expect(detail.prop('cost')).toEqual(0)
  expect(detail.prop('frequency')).toEqual(0)
  expect(detail.prop('name')).toEqual('No Name')
})
