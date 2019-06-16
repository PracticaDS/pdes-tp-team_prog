import React from 'react'
import { shallow } from 'enzyme'
import MachineNode from './MachineNode'
// activeImg, nonActiveImg, run

describe('MachineNode tests', () => {
  it('render simple Machine Node component', () => {
    const machineNode = shallow(<MachineNode />)
    expect(machineNode).toBeDefined()
  })
})
