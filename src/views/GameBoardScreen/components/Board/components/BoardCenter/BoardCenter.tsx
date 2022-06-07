import { FC, useEffect, useRef, useState } from 'react';

import { CellInterface } from '../../../../../../modules';
import { CardDetails, MainCenter, Copyright } from './components';
import { ViewManager, ViewManagerHandle } from '../../../../../../shared';

import classes from '../../Board.module.scss';

export interface BoardCenterProps {
  selectedCard: CellInterface | null;
}

export const BoardCenter: FC<BoardCenterProps> = ({ selectedCard }) => {
  const viewManagerRef = useRef<ViewManagerHandle>(null);

  const views = {
    cardDetails: (
      <CardDetails
        onClose={() => viewManagerRef?.current?.setView('mainCenter')}
        selectedCard={selectedCard}
      />
    ),
    mainCenter: (
      <MainCenter
        onShowInfo={() => viewManagerRef?.current?.setView('copyright')}
      />
    ),
    copyright: <Copyright onClose={() => viewManagerRef?.current?.back()} />,
  };

  useEffect(() => {
    if (selectedCard) {
      viewManagerRef?.current?.setView('cardDetails');
    }
  }, [selectedCard]);

  return (
    <div className={classes['center']}>
      <ViewManager
        views={views}
        ref={viewManagerRef}
        defaultView={'mainCenter'}
      />
    </div>
  );
};
