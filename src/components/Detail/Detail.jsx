import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Detail.css'
import connector from './DetailConnector'

const title = 'Details'

const Detail = ({ name, cost, frequency }) => (
  <div component_name="details">
    <font className="DetailHeader">{title}</font>
    <div className="detail">
      <Card>
        <CardContent>
          <Typography className="text-content" gutterBottom>
            {name}
          </Typography>
          <Typography className="text-content" gutterBottom>
            Cost: <span className="text-content-number">${cost}</span>
          </Typography>
          <Typography className="text-content">
            Frequency: <span className="text-content-number">{frequency}/s</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
)

Detail.defaultProps = {
  cost: 0,
  frequency: 0,
  name: 'No Name',
}

export default connector(Detail)
