import React from 'react'

import './MachineTypes.css'

import Constants from './MachineTypes.constants'

const elementClicked = val => {
  alert(`Se ha clickeado la opcion ${JSON.stringify(val)}`)
}

// eslint-disable-next-line react/prop-types
const MachineTypes = ({ elements }) => (
  <div className="myMainContainer">
    <div className="myTitle">{Constants.title}</div>
    <div className="myContainer commonStyle">
      {elements.map((string, index) => (
        <div key={index} className="machineElement" onClick={() => elementClicked(string)}>
          <span> {string} </span>
        </div>
      ))}
    </div>
  </div>
)

export default MachineTypes
