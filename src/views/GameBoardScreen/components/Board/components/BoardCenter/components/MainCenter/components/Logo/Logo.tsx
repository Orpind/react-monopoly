import { FC } from 'react';
import classes from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <div className={classes['logo']}>
      <div className={classes['logo__title']}>Monopoly</div>
      <span className={classes['logo__powered']}>
        powered by Dymyrtrii Tretiakov
      </span>
    </div>
  );
};
