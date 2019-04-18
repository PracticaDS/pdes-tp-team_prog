import PropTypes from 'prop-types'
import React from 'react'
import './Block.css'

import { Card, CardContent } from '@material-ui/core'
import EmptyMachineNode from '../MachineNodes/EmptyMachineNode/EmptyMachineNode'

// eslint-disable-next-line react/prop-types
const Block = ({ position: { row, column }, Machine }) => (
  <Card className="Block">
    <CardContent>
      <Machine />
      <div>
        {`Row: ${row}`}
        {'\n'}
        {`Column: ${column}`}
      </div>
    </CardContent>
  </Card>
)

Block.propTypes = {
  Machine: PropTypes.object,
}

Block.defaultProps = {
  Machine: EmptyMachineNode,
}

export default Block
