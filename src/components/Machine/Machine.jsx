import React from 'react'

import './Machine.css'

const elementClicked = val => {
  alert(`Se ha clickeado la opcion ${JSON.stringify(val)}`)
}

// eslint-disable-next-line react/prop-types
const Machine = ({ machine }) => (
  <div onClick={() => elementClicked(machine.title)}>
    <img className="machineElement" src={machine.image} alt="myImage" />
  </div>
)

export default Machine
