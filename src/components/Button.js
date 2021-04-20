import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GameContext } from '../provider/GameProvider';

const Button = ({ button }) => {
  const { handsCount } = useContext(GameContext);
  return (
    <button
      type="button"
      className={handsCount.toString() === button.value ? 'selected' : button.classname}
      onClick={button.handler}
    >
      {button.value}
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.object.isRequired,
};

export default Button;
