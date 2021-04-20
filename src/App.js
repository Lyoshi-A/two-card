import React from 'react';
import DeskBoard from './components/DeskBoard';
import GameProvider from './provider/GameProvider';

const App = () => (
  <GameProvider>
    <DeskBoard />
  </GameProvider>
);

export default App;
