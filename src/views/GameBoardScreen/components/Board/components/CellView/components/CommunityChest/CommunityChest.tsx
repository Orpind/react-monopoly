import { FC } from 'react';
import cls from 'classnames';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import chestImage from '../../../../../../../../assets/images/chest.png';

import classes from './CommunityChest.module.scss';

export interface CommunityChestProps {
  cell: CellInterface;
}

export const CommunityChest: FC<CommunityChestProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div
        className={cls([classes['chest']], classes[`chest--${cell.rotation}`])}
      >
        <img className={classes['chest__image']} src={chestImage} alt="" />
      </div>
    </CellContainer>
  );
};
