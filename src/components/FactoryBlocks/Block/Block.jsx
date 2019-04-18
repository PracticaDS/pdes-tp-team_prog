import React from 'react'
import './Block.css'

import { Card, CardContent } from '@material-ui/core'

// eslint-disable-next-line react/prop-types
const Block = ({ position: { row, column } }) => (
  <Card className="Block">
    <CardContent>
      {`Row: ${row}`}
      {'\n'}
      {`Column: ${column}`}
    </CardContent>
  </Card>
)

export default Block
