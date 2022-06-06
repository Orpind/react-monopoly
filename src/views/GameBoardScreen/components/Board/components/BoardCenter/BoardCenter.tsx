import { FC, useState } from 'react';

import { CellInterface } from '../../../../../../modules';
import { CardDetails, MainCenter, Copyright } from './components';

import classes from '../../Board.module.scss';

export interface BoardCenterProps {
  selectedCard: CellInterface | null;
  onClearSelected: () => void;
}

export const BoardCenter: FC<BoardCenterProps> = ({
  selectedCard,
  onClearSelected,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <div className={classes['center']}>
      {showInfo && <Copyright onClose={() => setShowInfo(false)} />}
      {selectedCard ? (
        <CardDetails onClose={onClearSelected} selectedCard={selectedCard} />
      ) : (
        <MainCenter onShowInfo={() => setShowInfo(true)} />
      )}
    </div>
  );
};
