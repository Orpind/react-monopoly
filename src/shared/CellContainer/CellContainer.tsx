import { FC } from 'react';

import { PositionType } from '../../modules/types';

import classes from './CellContainer.module.scss';

export interface CellContainerProps {
  position: PositionType;
  children: JSX.Element;
  onSelect?: () => void;
}

export const CellContainer: FC<CellContainerProps> = ({
  position,
  onSelect,
  children,
}) => {
  return (
    <div
      onClick={onSelect}
      className={classes['cell-container']}
      style={{
        gridColumn: `${position.xStart}/${position.xEnd}`,
        gridRow: `${position.yStart}/${position.yEnd}`,
      }}
    >
      {children}
    </div>
  );
};
