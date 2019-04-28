import React from 'react'
import connector from './EditionActionConnector'

import './EditionOption.css'

const EditionOption = ({
  editionOption: { title, image },
  onSelectAction,
  editionActionSelected,
}) => (
  <div onClick={() => onSelectAction(title)}>
    <img
      className={
        editionActionSelected === title ? 'editionOptionElementSelected' : 'editionOptionElement'
      }
      src={image}
      alt="myImage"
    />
  </div>
)

export default connector(EditionOption)
