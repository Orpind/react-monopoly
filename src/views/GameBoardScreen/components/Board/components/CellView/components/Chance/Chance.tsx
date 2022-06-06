import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import classes from './Chance.module.scss';

export interface ChanceProps {
  cell: CellInterface;
}

export const Chance: FC<ChanceProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div
        className={cls(
          [classes['chance']],
          classes[`chance--${cell.rotation}`]
        )}
      >
        ?
      </div>
    </CellContainer>
  );
};
