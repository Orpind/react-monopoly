import { FC } from 'react';

import { CellInterface, CellType } from '../../../../../../modules';
import {
  Chance,
  CommunityChest,
  FreeParking,
  GoToJail,
  Jail,
  Property,
  SpecialProperty,
  Start,
  TaxCollector,
  TrainStation,
} from './components';

export interface CellViewProps {
  type: CellType;
  cell: CellInterface;
  onSelect: () => void;
}

export const CellView: FC<CellViewProps> = ({ type, cell, onSelect }) => {
  switch (type) {
    case CellType.PROPERTY:
      return <Property cell={cell} onSelect={onSelect} />;
    case CellType.COMMUNITY_CHEST:
      return <CommunityChest cell={cell} />;
    case CellType.SPECIAL_PROPERTY:
      return <SpecialProperty cell={cell} onSelect={onSelect} />;
    case CellType.TRAIN_STATION:
      return <TrainStation cell={cell} onSelect={onSelect} />;
    case CellType.CHANCE:
      return <Chance cell={cell} />;
    case CellType.FREE_PARKING:
      return <FreeParking cell={cell} />;
    case CellType.START:
      return <Start cell={cell} />;
    case CellType.GO_TO_JAIL:
      return <GoToJail cell={cell} />;
    case CellType.TAX_COLLECTOR:
      return <TaxCollector cell={cell} />;
    case CellType.JAIL:
      return <Jail cell={cell} />;
    default:
      return null;
  }
};
