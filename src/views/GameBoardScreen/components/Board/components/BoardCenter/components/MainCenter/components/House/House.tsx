import { FC } from 'react';
import classes from './House.module.scss';

export interface HouseProps {
  image: string;
  current: number;
  max: number;
}

export const House: FC<HouseProps> = ({ image, current, max }) => {
  return (
    <div className={classes['house']}>
      <img className={classes['house__image']} src={image} alt="" />
      <span className={classes['house__quantity']}>{`${current}/${max}`}</span>
    </div>
  );
};
