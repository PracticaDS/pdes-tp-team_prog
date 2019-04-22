import React from 'react'
import { Card, CardContent, CardHeader } from '@material-ui/core'
import EditionOption from '../EditionOption/EditionOption'

import './Edition.css'

import Constants from './Edition.constants'

// eslint-disable-next-line react/prop-types
const Edition = ({ elements }) => (
  <Card className="myMainContainer">
    <CardHeader className="Header" title={Constants.title} />
    <CardContent className="myContainer">
      {elements.map((editionOption, index) => (
        <EditionOption key={index} editionOption={editionOption} />
      ))}
    </CardContent>
  </Card>
)

export default Edition
