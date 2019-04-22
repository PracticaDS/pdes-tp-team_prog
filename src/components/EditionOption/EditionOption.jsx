import React from 'react'

import './EditionOption.css'

const elementClicked = val => {
  alert(`Se ha clickeado la opcion ${JSON.stringify(val)}`)
}

// eslint-disable-next-line react/prop-types
const EditionOption = ({ editionOption }) => (
  <div className="machineElement" onClick={() => elementClicked(editionOption.title)}>
    <img className="basicMachine" src={editionOption.image} alt="myImage" />
  </div>
)

export default EditionOption
