import { Board } from './components';
import { ControlPanel } from './components';

import orientationImage from '../../assets/images/orientation.png';

import classes from './GameBoardScreen.module.scss';

export const GameBoardScreen = () => {
  return (
    <>
      <div className={classes['orientation']}>
        <img src={orientationImage} alt="" />
      </div>
      <div className={classes['game-board']}>
        <Board />
        <ControlPanel />
      </div>
    </>
  );
};
