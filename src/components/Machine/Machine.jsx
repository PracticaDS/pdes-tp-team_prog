import React from 'react'

// import image from '../../assets/crafter.png'

import './Machine.css'

// eslint-disable-next-line react/prop-types
const Machine = ({ image }) => (
  <div>
    <img className="basicMachine" src={image} alt="myImage" />
  </div>
)

export default Machine
