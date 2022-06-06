import { FC } from 'react';

import homeGreenImage from '../../../../../../../../assets/images/home-green.png';
import homeRedImage from '../../../../../../../../assets/images/home-red.png';
import chestImage from '../../../../../../../../assets/images/chest.png';

import classes from './MainCenter.module.scss';
import { Button } from '../../../../../../../../shared';
import { Card, House, Logo } from './components';

export interface MainCenterProps {
  onShowInfo: () => void;
}

export const MainCenter: FC<MainCenterProps> = ({ onShowInfo }) => {
  return (
    <div className={classes['main-center']}>
      <Button
        onClick={onShowInfo}
        className={classes['main-center__info-button']}
      >
        i
      </Button>
      <div className={classes['main-center__content']}>
        <Card title={'Chance'} max={20} current={15} symbol={'?'} />
        <div className={classes['main-center__general']}>
          <Logo />
          <div className={classes['main-center__houses']}>
            <House image={homeGreenImage} current={10} max={20} />
            <House image={homeRedImage} current={10} max={20} />
          </div>
        </div>
        <Card
          title={'Community chest'}
          max={20}
          current={15}
          image={chestImage}
        />
      </div>
    </div>
  );
};
