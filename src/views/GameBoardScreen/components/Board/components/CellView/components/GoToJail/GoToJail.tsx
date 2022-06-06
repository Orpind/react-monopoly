import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import handcuffsImage from '../../../../../../../../assets/images/handcuffs.png';

import classes from './GoToJail.module.scss';

export interface GoToJailProps {
  cell: CellInterface;
}

export const GoToJail: FC<GoToJailProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div className={classes['go-to-jail']}>
        <div className={classes['go-to-jail__text']}>Go to</div>
        <img
          className={classes['go-to-jail__image']}
          src={handcuffsImage}
          alt=""
        />
        <div className={classes['go-to-jail__text']}>Jail</div>
      </div>
    </CellContainer>
  );
};
