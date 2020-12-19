import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ x1, x2, color }) => (
  <line x1={x1} y1="0" x2={x2} y2="0" style={{ stroke: color, strokeWidth: '4em' }} />
);

Line.propTypes = {
  x1: PropTypes.string.isRequired,
  x2: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Line;
