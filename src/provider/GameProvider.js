import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DESK_CARDS_COUNT,
  HANDS_COUNT,
  HANDS_BUTTONS,
} from '../consts/consts.js';
import {
  generateEmptyGame,
  runNewGame,
  getWinner,
  getResults
} from './game.helper';

export const GameContext = React.createContext();

const GameProvider = (props) => {
  const { children } = props;
  const cards = Array.from(Array(DESK_CARDS_COUNT).keys());

  const [handsCount, setHandsCount] = useState(HANDS_COUNT);
  const [gameStarted, startGame] = useState(false);
  const [hands, setHands] = useState(generateEmptyGame(HANDS_COUNT));

  const handleSetDisplayValue = (num) => () => {
    if (!gameStarted) {
      setHandsCount(num);
      setHands(generateEmptyGame(num));
    }
  };

  const handleStartGame = () => {
    if (!gameStarted) {
      setHands(runNewGame(handsCount, cards));
    } else {
      setHands(generateEmptyGame(handsCount));
    }
    startGame((current) => !current);
  };

  const gameButton = {
    value: gameStarted ? 'reset game' : 'start new game',
    handler: handleStartGame,
    classname: 'start-game',
  };

  const gameResult = () => {
    const winner = getWinner();
    return {
      data: getResults(),
      finished: gameStarted,
      winner: winner.hand.join(', '),
      message: !winner.hand.length ? 'Friendship wins' : `Hand(s) ${winner.hand.join(', ')} wins with result ${winner.pairs} pairs ( ${winner.data} )`,
    };
  };

  const buttons = HANDS_BUTTONS.map((value) => ({
    value: value.toString(),
    handler: handleSetDisplayValue(value),
    classname: '',
  }));

  return (
    <GameContext.Provider
      value={{
        handleSetDisplayValue,
        hands,
        handsCount,
        gameStarted,
        buttons,
        gameButton,
        gameResult,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

GameProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default GameProvider;
