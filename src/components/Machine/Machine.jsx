import React from 'react'
import { Card, CardMedia } from '@material-ui/core'

const Machine = ({ name, isActive, isSelected, isDisabled, onClick, activeImg, nonActiveImg }) => {
  const className = (isSelected ? 'selected' : '') + (isDisabled ? 'disabled' : '')
  return (
    <Card
      className={`machine ${className}`}
      component_name={name}
      onClick={() => !isDisabled && onClick && onClick()}
    >
      <CardMedia component="img" image={isActive ? activeImg : nonActiveImg} />
    </Card>
  )
}

export default Machine
