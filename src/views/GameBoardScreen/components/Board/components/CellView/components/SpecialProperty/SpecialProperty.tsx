import cls from 'classnames';
import { FC } from 'react';

import { CellContainer } from '../../../../../../../../shared';
import { CellInterface } from '../../../../../../../../modules';

import lampImage from '../../../../../../../../assets/images/lamp.png';
import dropImage from '../../../../../../../../assets/images/drop.png';

import classes from './SpecialProperty.module.scss';

export interface SpecialPropertyProps {
  cell: CellInterface;
  onSelect: () => void;
}

export const SpecialProperty: FC<SpecialPropertyProps> = ({
  cell,
  onSelect,
}) => {
  return (
    <CellContainer position={cell.position} onSelect={onSelect}>
      <div
        className={cls(
          [classes['special']],
          classes[`special--${cell.rotation}`],
          classes[`special--${cell.specialType}`]
        )}
      >
        <img
          className={cls([
            classes['special__image'],
            classes['special__image--lamp'],
          ])}
          src={lampImage}
          alt="train"
        />
        <img
          className={cls([
            classes['special__image'],
            classes['special__image--water'],
          ])}
          src={dropImage}
          alt="train"
        />
        <div className={classes['special__price']}>${cell.price}B</div>
      </div>
    </CellContainer>
  );
};
