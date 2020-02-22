import React from 'react';

const Line = ({ x1, x2, color }) => (
  <line x1={x1} y1="0" x2={x2} y2="0" style={{ stroke: color, strokeWidth: '4em' }} />
);

export default Line;
