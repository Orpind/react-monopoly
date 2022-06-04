import cls from 'classnames';

import volumeImage from '../../../../assets/images/volume.png';
import chatImage from '../../../../assets/images/chat.png';
import microphoneImage from '../../../../assets/images/microphone.png';

import classes from './ControlPanel.module.scss';

export enum PlayerColor {
  BROWN = 'brown',
  LIGHT_BLUE = 'light-blue',
  PURPLE = 'purple',
  ORANGE = 'orange',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  DARK_BLUE = 'dark-blue',
}

export enum PlayerFigure {
  PET = 'pet',
  CAT = 'cat',
  GIRAFFE = 'giraffe',
  PLANE = 'plane',
  RAT = 'rat',
  BICYCLE = 'bicycle',
  BOAT = 'boat',
  BUNNY = 'bunny',
}

export interface Player {
  name: string;
  balance: number;
  color: PlayerColor;
  figure: PlayerFigure;
}

export const players: Player[] = [
  {
    name: 'Player 1',
    balance: 2.3,
    color: PlayerColor.BROWN,
    figure: PlayerFigure.PET,
  },
  {
    name: 'Player 2',
    balance: 1.4,
    color: PlayerColor.GREEN,
    figure: PlayerFigure.BICYCLE,
  },
  {
    name: 'Player 3',
    balance: 4.4,
    color: PlayerColor.RED,
    figure: PlayerFigure.BOAT,
  },
  {
    name: 'Player 4',
    balance: 4.4,
    color: PlayerColor.ORANGE,
    figure: PlayerFigure.CAT,
  },

  {
    name: 'Player 5',
    balance: 2.3,
    color: PlayerColor.DARK_BLUE,
    figure: PlayerFigure.BUNNY,
  },
  {
    name: 'Player 6',
    balance: 1.4,
    color: PlayerColor.LIGHT_BLUE,
    figure: PlayerFigure.GIRAFFE,
  },
  {
    name: 'Player 7',
    balance: 4.4,
    color: PlayerColor.YELLOW,
    figure: PlayerFigure.PLANE,
  },
  {
    name: 'Player 8',
    balance: 4.4,
    color: PlayerColor.PURPLE,
    figure: PlayerFigure.RAT,
  },
];

export const ControlPanel = () => {
  return (
    <div className={classes['control-panel']}>
      <div className={classes['control-panel__header']}>
        <div className={classes['control-panel__header-block']}>
          <div className={classes['control-panel__header-block--title']}>
            Balance
          </div>
          <div className={classes['control-panel__header-block--value']}>
            $104 000 000
          </div>
        </div>
        <div className={classes['control-panel__header-block']}>
          <div
            className={cls([
              classes['control-panel__header-block--title'],
              classes['time'],
            ])}
          >
            End of turn time
          </div>
          <div
            className={cls([
              classes['control-panel__header-block--value'],
              classes['time'],
            ])}
          >
            04:45
          </div>
        </div>
      </div>
      <div className={classes['players']}>
        {players.map((player) => (
          <div
            className={cls([
              classes['player'],
              classes[`player--${player.color}`],
            ])}
          >
            <div className={classes['player__header']}>
              <img
                className={classes['player__volume']}
                src={volumeImage}
                alt=""
              />
              <span className={classes['player__name']}>{player.name}</span>
            </div>
            <div className={classes['player__body']}>
              <img className={classes['player__image']} src="" alt="" />
              <div className={classes['player__balance']}>
                ${player.balance}B
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={classes['buttons']}>
        <button className={classes['button']}>Roll the dice</button>
        <button className={cls([classes['image-button'], classes['button']])}>
          <img src={chatImage} alt="" />
        </button>
        <button className={cls([classes['image-button'], classes['button']])}>
          <img src={microphoneImage} alt="" />
        </button>
      </div>
    </div>
  );
};
