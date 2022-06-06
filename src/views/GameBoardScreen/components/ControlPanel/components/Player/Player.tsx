import cls from 'classnames';
import { FC } from 'react';

import volumeImage from '../../../../../../assets/images/volume.png';
import { Player as PlayerInterface } from '../../../../../../modules';

import classes from './Player.module.scss';

export interface PlayerProps {
  player: PlayerInterface;
}

export const Player: FC<PlayerProps> = ({ player }) => {
  return (
    <div
      className={cls([classes['player'], classes[`player--${player.color}`]])}
    >
      <div className={classes['player__header']}>
        <img className={classes['player__volume']} src={volumeImage} alt="" />
        <span className={classes['player__name']}>{player.name}</span>
      </div>
      <div className={classes['player__body']}>
        <img className={classes['player__image']} src="" alt="" />
        <div className={classes['player__balance']}>${player.balance}B</div>
      </div>
    </div>
  );
};
