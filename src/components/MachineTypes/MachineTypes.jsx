import React from 'react';
import './MachineTypes.css';

// eslint-disable-next-line react/prop-types
const MachineTypes = ({ elements }) => (
  <div className="myContainer commonStyle">
    {elements.map((string, index) => (
      <div key={index} className="machineElement">
        <span> {string} </span>
      </div>
    ))}
  </div>
);

export default MachineTypes;
