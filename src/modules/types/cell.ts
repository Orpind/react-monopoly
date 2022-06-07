export enum CellType {
  CHANCE = 'chance',
  TRAIN_STATION = 'train-station',
  START = 'start',
  PROPERTY = 'property',
  SPECIAL_PROPERTY = 'special-property',
  JAIL = 'jail',
  COMMUNITY_CHEST = 'community-chest',
  FREE_PARKING = 'free-parking',
  GO_TO_JAIL = 'go-to-jail',
  TAX_COLLECTOR = 'tax-collector',
}

export enum PropertyColor {
  BROWN = 'brown',
  LIGHT_BLUE = 'light-blue',
  PURPLE = 'purple',
  ORANGE = 'orange',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  DARK_BLUE = 'dark-blue',
  NONE = 'none',
}

export enum SpecialType {
  LAMP = 'lamp',
  WATER = 'water',
}

export enum CellRotation {
  DOWN = 'down',
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
}

export type PositionType = {
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
};

export type LevelInfoType = {
  level: -1 | 0 | 1 | 2 | 3 | 4 | 5;
  label: string;
  rent: number[];
};

export interface CellInterface {
  type: CellType;
  color: PropertyColor;
  rotation: CellRotation;
  position: PositionType;
  id: number;
  title?: string;
  description?: string;
  price?: number;
  specialType?: SpecialType;
  owner?: 1 | 2 | 3 | 4 | 5 | 6;
  levelInfo?: LevelInfoType;
}
