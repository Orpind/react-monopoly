import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import homeGreenImage from '../../../../../../../../assets/images/home-green.png';
import homeRedImage from '../../../../../../../../assets/images/home-red.png';

import classes from './Property.module.scss';

export interface PropertyProps {
  cell: CellInterface;
  onSelect: () => void;
}

export const Property: FC<PropertyProps> = ({ cell, onSelect }) => {
  return (
    <CellContainer position={cell.position} onSelect={onSelect}>
      <CellContainer position={cell.position} onSelect={onSelect}>
        <div
          className={cls(
            [classes['property']],
            classes[`property--${cell.rotation}`]
          )}
        >
          <div
            className={cls([
              classes['property__color'],
              classes[`property__color--${cell.color}`],
            ])}
          >
            {!cell.level ? null : cell.level < 5 ? (
              new Array(cell.level)
                .fill('')
                .map((_, index) => (
                  <img
                    className={classes['home']}
                    src={homeGreenImage}
                    alt=""
                    key={index}
                  />
                ))
            ) : (
              <img className={classes['home']} src={homeRedImage} alt="" />
            )}
          </div>
          {/*<div className={classes['property__title']}>{cell.title}</div>*/}
          <div className={classes['property__price']}>${cell.price}M</div>
        </div>
      </CellContainer>
    </CellContainer>
  );
};
