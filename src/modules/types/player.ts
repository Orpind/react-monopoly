export enum PlayerColor {
  BROWN = 'brown',
  LIGHT_BLUE = 'light-blue',
  PURPLE = 'purple',
  ORANGE = 'orange',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green',
  DARK_BLUE = 'dark-blue',
}

export enum PlayerFigure {
  PET = 'pet',
  CAT = 'cat',
  GIRAFFE = 'giraffe',
  PLANE = 'plane',
  RAT = 'rat',
  BICYCLE = 'bicycle',
  BOAT = 'boat',
  BUNNY = 'bunny',
}

export interface Player {
  name: string;
  balance: number;
  color: PlayerColor;
  figure: PlayerFigure;
}
