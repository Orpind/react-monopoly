import cls from 'classnames';
import { FC } from 'react';

import volumeImage from '../../../../../../assets/images/volume.png';
import boatImage from '../../../../../../assets/images/boat.png';
import carImage from '../../../../../../assets/images/car.png';
import catImage from '../../../../../../assets/images/cat.png';
import petImage from '../../../../../../assets/images/pet.png';
import giraffeImage from '../../../../../../assets/images/giraffe.png';
import bunnyImage from '../../../../../../assets/images/bunny.png';
import bicycleImage from '../../../../../../assets/images/bicycle.png';
import planeImage from '../../../../../../assets/images/plane.png';
import {
  Player as PlayerInterface,
  PlayerFigure,
} from '../../../../../../modules';

import classes from './Player.module.scss';
import { moneyFormat } from '../../../../../../utils';

export interface PlayerProps {
  player: PlayerInterface;
}

export const Player: FC<PlayerProps> = ({ player }) => {
  const figureImage = (figure: PlayerFigure): string => {
    switch (figure) {
      case 'boat':
        return boatImage;
      case 'pet':
        return petImage;
      case 'cat':
        return catImage;
      case 'rat':
        return carImage;
      case 'bunny':
        return bunnyImage;
      case 'bicycle':
        return bicycleImage;
      case 'giraffe':
        return giraffeImage;
      case 'plane':
        return planeImage;
      default:
        return '';
    }
  };
  return (
    <div
      className={cls([classes['player'], classes[`player--${player.color}`]])}
    >
      <div className={classes['player__header']}>
        <img className={classes['player__volume']} src={volumeImage} alt="" />
        <span className={classes['player__name']}>{player.name}</span>
      </div>
      <div className={classes['player__body']}>
        <img
          className={classes['player__image']}
          src={figureImage(player.figure)}
          alt=""
        />
        <div className={classes['player__balance']}>
          {moneyFormat(player.balance)}
        </div>
      </div>
    </div>
  );
};
