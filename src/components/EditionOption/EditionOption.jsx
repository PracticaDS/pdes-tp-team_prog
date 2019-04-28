import React from 'react'

import './EditionOption.css'

const elementClicked = val => {
  alert(`Se ha clickeado la opcion ${JSON.stringify(val)}`)
}

const EditionOption = ({ editionOption }) => (
  <div onClick={() => elementClicked(editionOption.title)}>
    <img className="editionOptionElement" src={editionOption.image} alt="myImage" />
  </div>
)

export default EditionOption
