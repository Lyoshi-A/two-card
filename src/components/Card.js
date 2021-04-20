import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../provider/GameProvider';
import { CARDS } from '../consts/consts';

const Card = ({ handIndex, cardIndex }) => {
  const { gameResult } = useContext(GameContext);
  const game = gameResult();
  return (
    <img
      alt={`${CARDS[cardIndex].name} ${CARDS[cardIndex].value}`}
      className={`card${(game.finished && game.data[handIndex][CARDS[cardIndex].value].count > 1) ? ` selected${CARDS[cardIndex].value}` : ''}`}
      src={`/assets/${CARDS[cardIndex].name}.png`}
    />
  );
};

Card.propTypes = {
  handIndex: PropTypes.number.isRequired,
  cardIndex: PropTypes.number.isRequired,
};

export default Card;
