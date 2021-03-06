import cls from 'classnames';

import chatImage from '../../../../assets/images/chat.png';
import microphoneImage from '../../../../assets/images/microphone.png';
import diceImage from '../../../../assets/images/dice.png';
import tradeImage from '../../../../assets/images/trade.png';

import { ButtonWithIcon } from '../../../../shared';
import { players } from '../../../../modules';
import { Player } from './components';

import classes from './ControlPanel.module.scss';
import { moneyFormat } from '../../../../utils';

export const ControlPanel = () => {
  return (
    <div className={classes['control-panel']}>
      <div className={classes['control-panel__header']}>
        <div className={classes['control-panel__header-block']}>
          <div className={classes['control-panel__header-block--title']}>
            Balance
          </div>
          <div className={classes['control-panel__header-block--value']}>
            {moneyFormat(1800)}
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
          <Player player={player} />
        ))}
      </div>
      <div className={classes['buttons']}>
        <ButtonWithIcon
          className={classes['image-button']}
          onClick={() => {}}
          icon={tradeImage}
        />
        <ButtonWithIcon
          className={classes['image-button']}
          onClick={() => {}}
          icon={diceImage}
        />
        <ButtonWithIcon
          className={classes['image-button']}
          onClick={() => {}}
          icon={chatImage}
          disabled
        />
        <ButtonWithIcon
          className={classes['image-button']}
          onClick={() => {}}
          icon={microphoneImage}
          disabled
        />
      </div>
    </div>
  );
};
