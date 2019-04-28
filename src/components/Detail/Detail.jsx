import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, Typography } from '@material-ui/core'
import './Detail.css'

const Detail = ({ name, cost, frequency }) => (
  <div className="detail">
    <Typography className="title text-content" variant="h6" gutterBottom>
      Details
    </Typography>
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
)

Detail.defaultProps = {
  cost: 0,
  frequency: 0,
  name: 'No Name',
}

Detail.propTypes = {
  cost: PropTypes.number,
  frequency: PropTypes.number,
  name: PropTypes.string,
}

export default Detail
