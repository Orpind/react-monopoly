import { FC } from 'react';
import cls from 'classnames';

import {
  CellInterface,
  CellType,
  SpecialType,
} from '../../../../../../../../modules';
import trainImage from '../../../../../../../../assets/images/train.png';
import lampImage from '../../../../../../../../assets/images/lamp.png';
import dropImage from '../../../../../../../../assets/images/drop.png';
import { Button } from '../../../../../../../../shared';

import classes from './CardDetails.module.scss';

export interface CardDetailsProps {
  onClose: () => void;
  selectedCard: CellInterface | null;
}

export const CardDetails: FC<CardDetailsProps> = ({
  onClose,
  selectedCard,
}) => {
  const getCardHeader = (
    type: CellType,
    specialType?: SpecialType
  ): JSX.Element | null => {
    switch (type) {
      case CellType.TRAIN_STATION:
        return <img src={trainImage} alt="train" />;
      case CellType.PROPERTY:
        return (
          <div
            className={cls([
              classes['card__color'],
              classes[`card__color--${selectedCard?.color}`],
            ])}
          />
        );
      case CellType.SPECIAL_PROPERTY:
        return (
          <img
            src={specialType === SpecialType.LAMP ? lampImage : dropImage}
            alt="train"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes['card-details']}>
      <div className={classes['card-details__card']}>
        {selectedCard &&
          getCardHeader(selectedCard.type, selectedCard.specialType)}
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
        <Button onClick={onClose}>Close</Button>
        <div>
          <div className={classes['info__row']}>
            <span>Level:&nbsp;</span>
            <span>{selectedCard?.level || 0}</span>
          </div>
          <div className={classes['info__row']}>
            <span>Owner:&nbsp;</span>
            <span>{selectedCard?.owner || 'For sale!'}</span>
          </div>
        </div>
        {selectedCard?.level && selectedCard?.level > 0 ? (
          <>
            <Button onClick={() => {}} disabled={selectedCard?.level === 5}>
              Upgrade
            </Button>
            <Button onClick={() => {}}>Downgrade</Button>
          </>
        ) : (
          <Button onClick={() => {}}>Buy</Button>
        )}
      </div>
    </div>
  );
};
