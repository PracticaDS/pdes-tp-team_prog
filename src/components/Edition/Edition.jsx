import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './Edition.css'

import Constants from './Edition.constants'

const Edition = ({ options = [], renderOption }) => (
  <div style={{ marginTop: '1rem' }}>
    <font className="editionHeader">{Constants.title}</font>
    <Card className="editionMainContainer">
      <CardContent className="editionContainer">
        {options.map((editionOption, index) => (
          <div key={index} className="editionElement">
            {renderOption(editionOption)}
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
)

export default Edition
