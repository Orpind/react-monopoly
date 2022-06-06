import { FC } from 'react';
import classes from './Card.module.scss';

export interface CardProps {
  title: string;
  max: number;
  current: number;
  image?: string;
  symbol?: string;
}

export const Card: FC<CardProps> = ({ max, symbol, image, current, title }) => {
  return (
    <div className={classes['card']}>
      <span className={classes['card__title']}>{title}</span>
      {symbol && <span className={classes['card__image']}>{symbol}</span>}
      {image && <img className={classes['card__image']} src={image} alt="" />}
      <span className={classes['card__quantity']}>{`${current}/${max}`}</span>
    </div>
  );
};
