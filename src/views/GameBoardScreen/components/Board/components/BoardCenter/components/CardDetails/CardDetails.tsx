import { FC } from 'react';
import cls from 'classnames';

import { CellInterface, CellType } from '../../../../../../../../modules';
import trainImage from '../../../../../../../../assets/images/train.png';

import classes from './CardDetails.module.scss';

export interface CardDetailsProps {
  onClose: () => void;
  selectedCard: CellInterface | null;
}

export const CardDetails: FC<CardDetailsProps> = ({
  onClose,
  selectedCard,
}) => {
  return (
    <div className={classes['card-details']}>
      <div className={classes['card-details__card']}>
        {selectedCard?.type === CellType.TRAIN_STATION ? (
          <img src={trainImage} alt="" />
        ) : (
          <div
            className={cls([
              classes['card__color'],
              classes[`card__color--${selectedCard?.color}`],
            ])}
          />
        )}

        <div className={classes['card__title']}>{selectedCard?.title}</div>
        <div className={classes['card__details']}>
          {selectedCard?.type === CellType.TRAIN_STATION
            ? new Array(4).fill('').map((_, index) => (
                <span
                  className={cls({
                    [classes['bold']]: index + 1 === selectedCard?.level,
                  })}
                >
                  {index + 1} station - ${100 * (index + 1)}M
                </span>
              ))
            : new Array(5).fill('').map((_, index) => (
                <span
                  className={cls({
                    [classes['bold']]: index + 1 === selectedCard?.level,
                  })}
                >
                  {index + 1} level - ${10 * (index + 1)}M
                </span>
              ))}
        </div>
        <div className={classes['card__price']}>${selectedCard?.price}M</div>
      </div>
      <div className={classes['card__info']}>
        <button className={classes['button']} onClick={onClose}>
          Close
        </button>
        <div className={classes['info__row']}>
          <span>Level:&nbsp;</span>
          <span>{selectedCard?.level || 0}</span>
        </div>
        <div className={classes['info__row']}>
          <span>Owner:&nbsp;</span>
          <span>{selectedCard?.owner || 'For sale!'}</span>
        </div>
        {selectedCard?.level && selectedCard?.level > 0 ? (
          <>
            <button
              className={classes['button']}
              disabled={selectedCard?.level === 5}
            >
              Upgrade
            </button>
            <button className={classes['button']}>Downgrade</button>
          </>
        ) : (
          <button className={classes['button']}>Buy</button>
        )}
      </div>
    </div>
  );
};
