import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import classes from './Start.module.scss';

export interface StartProps {
  cell: CellInterface;
}

export const Start: FC<StartProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div className={classes['cell-start']}>
        <div className={classes['cell-start__title']}>Go</div>
        <div className={classes['cell-start__description']}>salary $200M</div>
      </div>
    </CellContainer>
  );
};
