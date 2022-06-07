import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import trainImage from '../../../../../../../../assets/images/train.png';

import classes from './TrainStation.module.scss';
import { moneyFormat } from '../../../../../../../../utils';

export interface TrainStationProps {
  cell: CellInterface;
  onSelect: () => void;
}

export const TrainStation: FC<TrainStationProps> = ({ cell, onSelect }) => {
  return (
    <CellContainer position={cell.position} onSelect={onSelect}>
      <div
        className={cls(
          [classes['train-station']],
          classes[`train-station--${cell.rotation}`]
        )}
      >
        <img
          className={classes['train-station__image']}
          src={trainImage}
          alt="train"
        />
        <div className={classes['train-station__price']}>
          {moneyFormat(Number(cell.price))}
        </div>
      </div>
    </CellContainer>
  );
};
