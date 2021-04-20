import React, { useContext } from 'react';
import {
  HAND_CARDS_COUNT,
  DESK_CARDS_COUNT,
} from '../consts/consts.js';
import Button from './Button';
import Hand from './Hand';
import { DeskStyles } from '../styles/Styles';
import { GameContext } from '../provider/GameProvider';

const DeskBoard = () => {
  const {
    hands,
    handsCount,
    buttons,
    gameButton,
    gameResult,
  } = useContext(GameContext);
  const game = gameResult();
  return (
    <DeskStyles>
      <div className="display">
        <p className="storedNumber">{`${DESK_CARDS_COUNT} cards, ${HAND_CARDS_COUNT} cards for every hand`}</p>
        <h3>{`Count of hands: ${handsCount}`}</h3>
        <div className="buttons-panel">
          <div className="buttons-panel-numbers">
            {buttons.map((button) => (
              <Button key={button.value} button={button} />
            ))}
          </div>
          <Button key={gameButton.value} button={gameButton} />
        </div>
        <h3>{game.finished ? game.message : ''}</h3>
        <div className="gameboard">
          {hands.map((value, index) => <Hand key={Math.random()} value={value} index={index} />)}
        </div>
      </div>
    </DeskStyles>
  );
};

export default DeskBoard;
