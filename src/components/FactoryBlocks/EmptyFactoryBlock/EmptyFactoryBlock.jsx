import React from 'react'

import './EmptyFactoryBlock.css'

// eslint-disable-next-line react/prop-types
const EmptyFactoryBlock = ({ position: { row, column } }) => (
  <div className="Block">
    {`Row: ${row}`}
    {'\n'}
    {`Column: ${column}`}
  </div>
)

export default EmptyFactoryBlock
