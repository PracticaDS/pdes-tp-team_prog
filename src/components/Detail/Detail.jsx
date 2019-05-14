import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import { Constant } from './Detail.constants'
import './Detail.css'

const Detail = ({ name, cost, frequency }) => (
  <div component_name="details">
    <font className="DetailHeader">{Constant.title}</font>
    <div className="detail">
      <Card>
        <CardContent>
          <Typography className="text-content" gutterBottom>
            {name}
          </Typography>
          <Typography className="text-content" gutterBottom>
            {Constant.cost}
            <span className="text-content-number">
              {Constant.dolar}
              {cost}
            </span>
          </Typography>
          <Typography className="text-content">
            {Constant.frequency}
            <span className="text-content-number">
              {frequency}
              {Constant.perSec}
            </span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  </div>
)

Detail.defaultProps = {
  cost: 0,
  frequency: 0,
  name: Constant.noName,
}

export default Detail
