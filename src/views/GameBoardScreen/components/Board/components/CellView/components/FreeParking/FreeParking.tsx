import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import carImage from '../../../../../../../../assets/images/car.png';

import classes from './FreeParking.module.scss';

export interface FreeParkingProps {
  cell: CellInterface;
}

export const FreeParking: FC<FreeParkingProps> = ({ cell }) => {
  return (
    <CellContainer position={cell.position}>
      <div className={classes['free-parking']}>
        <div className={classes['free-parking__text']}>Free</div>
        <img className={classes['free-parking__image']} src={carImage} alt="" />
        <div className={classes['free-parking__text']}>Parking</div>
      </div>
    </CellContainer>
  );
};
