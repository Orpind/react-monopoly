import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import ballAndChainImage from '../../../../../../../../assets/images/ball-and-chain.png';

import classes from './Jail.module.scss';

export interface JailProps {
  cell: CellInterface;
}

export const Jail: FC<JailProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div className={classes['jail']}>
        <div className={classes['jail__top-text']}>Visitors</div>
        <div className={classes['jail__footer']}>
          <div className={classes['jail__left-text']}>For</div>
          <div className={classes['jail__image-wrapper']}>
            <img
              className={classes['jail__image']}
              src={ballAndChainImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </CellContainer>
  );
};
