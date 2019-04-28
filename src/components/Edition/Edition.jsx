import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import EditionOption from '../EditionOption/EditionOption'

import './Edition.css'

import Constants from './Edition.constants'

// eslint-disable-next-line react/prop-types
const Edition = ({ elements }) => (
  <div style={{ 'margin-top': '1rem' }}>
    <font className="editionHeader">{Constants.title}</font>
    <Card className="editionMainContainer">
      <CardContent className="editionContainer">
        {elements.map((editionOption, index) => (
          <div key={index} className="editionElement">
            <EditionOption editionOption={editionOption} />
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default Edition
