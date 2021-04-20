import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Hand = ({ value, index }) => (
  <div className="hand">
    <div className="caption-left">
      {`HAND ${index + 1}`}
    </div>
    {value.map((card) => <Card key={Math.random()} handIndex={index} cardIndex={card} />)}
    <div className="caption-right">
      {`HAND ${index + 1}`}
    </div>
  </div>
);

Hand.propTypes = {
  value: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

export default Hand;
