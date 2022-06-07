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
import { moneyFormat } from '../../../../../../../../utils';

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
          {selectedCard?.levelInfo &&
            selectedCard.levelInfo.rent.map((r, idx) => (
              <span
                className={cls({
                  [classes['bold']]: idx + 1 === selectedCard?.levelInfo?.level,
                })}
              >
                {`${idx + 1} ${selectedCard?.levelInfo?.label} - ${moneyFormat(
                  Number(r)
                )}`}
              </span>
            ))}
        </div>
        <div className={classes['card__price']}>
          {moneyFormat(Number(selectedCard?.price))}
        </div>
      </div>
      <div className={classes['card__info']}>
        <Button onClick={onClose}>Close</Button>
        <div>
          <div className={classes['info-row']}>
            <span>Level:&nbsp;</span>
            <span>{selectedCard?.levelInfo?.level || 0}</span>
          </div>
          <div className={classes['info-row']}>
            <span>Owner:&nbsp;</span>
            <span>{selectedCard?.owner || 'For sale!'}</span>
          </div>
        </div>
        {selectedCard?.owner ? (
          <>
            <div className={classes['button-wrapper']}>
              <Button
                onClick={() => {}}
                disabled={selectedCard?.levelInfo?.level === 5}
              >
                Upgrade
              </Button>
              <Button onClick={() => {}}>Downgrade</Button>
            </div>
          </>
        ) : (
          <>
            <div className={classes['button-wrapper']}>
              <Button onClick={() => {}}>Buy</Button>
              <Button onClick={() => {}}>Auction</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
