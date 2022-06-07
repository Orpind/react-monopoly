import { FC, useState } from 'react';

import { CellView, BoardCenter } from './components';

import { CellInterface, board } from '../../../../modules';

import classes from './Board.module.scss';

export const Board: FC = () => {
  const [selectedCard, setSelectedCard] = useState<CellInterface | null>(null);
  return (
    <div className={classes['board']}>
      <BoardCenter selectedCard={selectedCard} />
      {board.cells.map((cell: CellInterface) => (
        <CellView
          type={cell.type}
          cell={cell}
          onSelect={() => setSelectedCard(cell)}
        />
      ))}
    </div>
  );
};
