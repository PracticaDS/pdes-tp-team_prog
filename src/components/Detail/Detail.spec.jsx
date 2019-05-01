import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import Detail from './Detail'

const state = {
  GameState: {
    machineSelected: {
      buy: 1000,
      frequency: 1,
      name: 'Starter',
    },
  },
}
const mockStore = configureStore()
const store = mockStore(state)

it('should render a Detail component with the default prop values', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Detail />
    </Provider>,
  )
  const detail = wrapper.find('Detail') // just fetch the functional component

  expect(detail.prop('cost')).toEqual(1000)
  expect(detail.prop('frequency')).toEqual(1)
  expect(detail.prop('name')).toEqual('Starter')
})
