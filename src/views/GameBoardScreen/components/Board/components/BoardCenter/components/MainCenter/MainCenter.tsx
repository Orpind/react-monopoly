import { FC } from 'react';

import homeGreenImage from '../../../../../../../../assets/images/home-green.png';
import homeRedImage from '../../../../../../../../assets/images/home-red.png';
import chestImage from '../../../../../../../../assets/images/chest.png';

import classes from './MainCenter.module.scss';
import { Button } from '../../../../../../../../shared';

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
      <div className={classes['main-center__card']}>
        <span className={classes['card__title']}>Chance</span>
        <span className={classes['card__image']}>?</span>
        <span className={classes['card__quantity']}>20/20</span>
      </div>
      <div className={classes['main-center__general']}>
        <div className={classes['main-center__logo-group']}>
          <div className={classes['main-center__title']}>Monopoly</div>
          <span className={classes['main-center__powered']}>
            powered by Dymyrtrii Tretiakov
          </span>
        </div>
        <div className={classes['main-center__infos']}>
          <div className={classes['main-center__houses']}>
            <img src={homeGreenImage} alt="" />
            <span>15/20</span>
          </div>
          <div className={classes['main-center__houses']}>
            <img src={homeRedImage} alt="" />
            <span>20/20</span>
          </div>
        </div>
      </div>
      <div className={classes['main-center__card']}>
        <span className={classes['card__title']}>Community chest</span>
        <img className={classes['card__image']} src={chestImage} alt="" />
        <span className={classes['card__quantity']}>20/20</span>
      </div>
    </div>
  );
};
