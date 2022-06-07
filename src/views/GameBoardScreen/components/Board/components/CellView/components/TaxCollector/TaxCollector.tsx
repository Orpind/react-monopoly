import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import classes from './TaxCollector.module.scss';
import bagImage from '../../../../../../../../assets/images/bag.png';
import { moneyFormat } from '../../../../../../../../utils';

export interface TaxCollectorProps {
  cell: CellInterface;
}

export const TaxCollector: FC<TaxCollectorProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div className={cls([classes['tax']], classes[`tax--${cell.rotation}`])}>
        <img className={classes['tax__image']} src={bagImage} alt="" />
        <div className={classes['tax__text']}>pay</div>
        <div className={classes['tax__price']}>
          {moneyFormat(Number(cell.price))}
        </div>
      </div>
    </CellContainer>
  );
};
