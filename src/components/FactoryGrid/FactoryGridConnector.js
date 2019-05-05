import React from 'react'
import { connect } from 'react-redux'
import { selectDimensions } from '../../selectors/Grid'
import Block from '../FactoryBlock/BlockConnected'
import { machineByType } from '../../utils/machineUtils'

const renderNode = node => {
  const MachineNode = machineByType[node.machine.type]
  return <MachineNode className="MachineNode" node={node} />
}

const connector = FactoryGrid => {
  const mapStateToProps = state => ({
    dimensions: selectDimensions(state),
    renderBlock: position => (
      <Block
        key={`${position.row}_${position.column}`}
        position={position}
        renderNode={renderNode}
      />
    ),
  })
  const mapDispatchToProps = () => ({})

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FactoryGrid)
}

export default connector
