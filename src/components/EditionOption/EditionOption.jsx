import React from 'react'

import './EditionOption.css'

const EditionOption = ({ editionOption: { title, image }, onSelectAction, isOptionSelected }) => (
  <div onClick={() => onSelectAction(title)}>
    <img
      className={isOptionSelected ? 'editionOptionElementSelected' : 'editionOptionElement'}
      src={image}
      alt="myImage"
    />
  </div>
)

export default EditionOption
