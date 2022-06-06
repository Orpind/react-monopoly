import cls from 'classnames';

import chatImage from '../../../../assets/images/chat.png';
import microphoneImage from '../../../../assets/images/microphone.png';

import { Button, ButtonWithIcon } from '../../../../shared';
import { players } from '../../../../modules';
import { Player } from './components';

import classes from './ControlPanel.module.scss';

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
          <Player player={player} />
        ))}
      </div>
      <div className={classes['buttons']}>
        <Button onClick={() => {}}>Roll the dice</Button>
        <ButtonWithIcon onClick={() => {}} icon={chatImage} />
        <ButtonWithIcon onClick={() => {}} icon={microphoneImage} />
      </div>
    </div>
  );
};
