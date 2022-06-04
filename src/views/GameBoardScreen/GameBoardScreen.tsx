import { Board } from './components';
import { ControlPanel } from './components';

import classes from './GameBoardScreen.module.scss';

export const GameBoardScreen = () => {
  return (
    <div className={classes['game-board']}>
      <Board />
      <ControlPanel />
    </div>
  );
};
