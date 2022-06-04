import { FC } from 'react';
import cls from 'classnames';

import classes from './Board.module.scss';

import trainImage from '../../../../assets/images/train.png';
import chestImage from '../../../../assets/images/chest.png';
import handcuffsImage from '../../../../assets/images/handcuffs.png';
import ballAndChainImage from '../../../../assets/images/ball-and-chain.png';
import carImage from '../../../../assets/images/car.png';
import bagImage from '../../../../assets/images/bag.png';
import lampImage from '../../../../assets/images/lamp.png';
import dropImage from '../../../../assets/images/drop.png';
import homeGreenImage from '../../../../assets/images/home-green.png';
import homeRedImage from '../../../../assets/images/home-red.png';

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
  level?: -1 | 0 | 1 | 2 | 3 | 4 | 5;
  owner?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface BoardInterface {
  cells: CellInterface[];
}

export type CellViewsType = Record<
  CellType,
  (cell: CellInterface) => JSX.Element
>;

/**
 * CellContainer
 */
interface CellContainerProps {
  position: PositionType;
  children: JSX.Element;
}

const CellContainer: FC<CellContainerProps> = ({ position, children }) => {
  return (
    <div
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
/**
 * CellContainer end
 */

export const cellViews: CellViewsType = {
  [CellType.CHANCE]: (cell) => (
    <CellContainer position={cell.position}>
      <div
        className={cls(
          [classes['chance']],
          classes[`chance--${cell.rotation}`]
        )}
      >
        ?
      </div>
    </CellContainer>
  ),
  [CellType.TRAIN_STATION]: (cell) => (
    <CellContainer position={cell.position}>
      <div
        className={cls(
          [classes['train-station']],
          classes[`train-station--${cell.rotation}`]
        )}
      >
        <img
          className={classes['train-station__image']}
          src={trainImage}
          alt="train"
        />
        <div className={classes['train-station__price']}>${cell.price}M</div>
      </div>
    </CellContainer>
  ),
  [CellType.START]: (cell) => (
    <CellContainer position={cell.position}>
      <div className={classes['cell-start']}>
        <div className={classes['cell-start__title']}>Go</div>
        <div className={classes['cell-start__description']}>salary $200M</div>
      </div>
    </CellContainer>
  ),
  [CellType.PROPERTY]: (cell) => (
    <CellContainer position={cell.position}>
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
  ),
  [CellType.JAIL]: (cell) => (
    <CellContainer position={cell.position}>
      <div className={classes['jail']}>
        <div className={classes['jail__top-text']}>Visitors</div>
        <div className={classes['jail__footer']}>
          <div className={classes['jail__left-text']}>For</div>
          <div className={classes['jail__image-wrapper']}>
            <img
              className={classes['jail__image']}
              src={ballAndChainImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </CellContainer>
  ),
  [CellType.COMMUNITY_CHEST]: (cell) => (
    <CellContainer position={cell.position}>
      <div
        className={cls([classes['chest']], classes[`chest--${cell.rotation}`])}
      >
        <img className={classes['chest__image']} src={chestImage} alt="" />
      </div>
    </CellContainer>
  ),
  [CellType.FREE_PARKING]: (cell) => (
    <CellContainer position={cell.position}>
      <div className={classes['free-parking']}>
        <div className={classes['free-parking__text']}>Free</div>
        <img className={classes['free-parking__image']} src={carImage} alt="" />
        <div className={classes['free-parking__text']}>Parking</div>
      </div>
    </CellContainer>
  ),
  [CellType.GO_TO_JAIL]: (cell) => (
    <CellContainer position={cell.position}>
      <div className={classes['go-to-jail']}>
        <div className={classes['go-to-jail__text']}>Go to</div>
        <img
          className={classes['go-to-jail__image']}
          src={handcuffsImage}
          alt=""
        />
        <div className={classes['go-to-jail__text']}>Jail</div>
      </div>
    </CellContainer>
  ),
  [CellType.TAX_COLLECTOR]: (cell) => (
    <CellContainer position={cell.position}>
      <div className={cls([classes['tax']], classes[`tax--${cell.rotation}`])}>
        <img className={classes['tax__image']} src={bagImage} alt="" />
        <div className={classes['tax__text']}>pay</div>
        <div className={classes['tax__price']}>${cell.price}M</div>
      </div>
    </CellContainer>
  ),
  [CellType.SPECIAL_PROPERTY]: (cell) => (
    <CellContainer position={cell.position}>
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
  ),
};

export const board: BoardInterface = {
  cells: [
    {
      type: CellType.JAIL,
      id: 10,
      color: PropertyColor.NONE,
      rotation: CellRotation.UP,
      position: {
        xStart: 1,
        yStart: 1,
        xEnd: 2,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 11,
      price: 91,
      title: 'The Angel Islington',
      color: PropertyColor.PURPLE,
      rotation: CellRotation.UP,
      position: {
        xStart: 2,
        yStart: 1,
        xEnd: 3,
        yEnd: 2,
      },
    },
    {
      type: CellType.SPECIAL_PROPERTY,
      id: 12,
      price: 12.4,
      specialType: SpecialType.WATER,
      color: PropertyColor.NONE,
      rotation: CellRotation.UP,
      position: {
        xStart: 3,
        yStart: 1,
        xEnd: 4,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 13,
      price: 97,
      title: 'Trafalgar Square',
      color: PropertyColor.PURPLE,
      rotation: CellRotation.UP,
      position: {
        xStart: 4,
        yStart: 1,
        xEnd: 5,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 14,
      price: 112,
      title: 'Northumberland Avenue',
      color: PropertyColor.PURPLE,
      rotation: CellRotation.UP,
      position: {
        xStart: 5,
        yStart: 1,
        xEnd: 6,
        yEnd: 2,
      },
    },
    {
      type: CellType.TRAIN_STATION,
      id: 15,
      price: 700,
      title: 'Fenchurch St. Station',
      color: PropertyColor.NONE,
      rotation: CellRotation.UP,
      position: {
        xStart: 6,
        yStart: 1,
        xEnd: 7,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 16,
      price: 125,
      title: 'Marlborough Street',
      color: PropertyColor.ORANGE,
      rotation: CellRotation.UP,
      position: {
        xStart: 7,
        yStart: 1,
        xEnd: 8,
        yEnd: 2,
      },
    },
    {
      type: CellType.COMMUNITY_CHEST,
      id: 17,
      color: PropertyColor.NONE,
      rotation: CellRotation.UP,
      position: {
        xStart: 8,
        yStart: 1,
        xEnd: 9,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 18,
      price: 148,
      title: 'Fleet Street',
      color: PropertyColor.ORANGE,
      rotation: CellRotation.UP,
      position: {
        xStart: 9,
        yStart: 1,
        xEnd: 10,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 19,
      price: 208,
      title: 'Old Kent Road',
      color: PropertyColor.ORANGE,
      rotation: CellRotation.UP,
      position: {
        xStart: 10,
        yStart: 1,
        xEnd: 11,
        yEnd: 2,
      },
    },
    {
      type: CellType.FREE_PARKING,
      id: 20,
      color: PropertyColor.NONE,
      rotation: CellRotation.UP,
      position: {
        xStart: 11,
        yStart: 1,
        xEnd: 12,
        yEnd: 2,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 9,
      price: 81,
      level: 5,
      title: 'Whitechapel Road',
      color: PropertyColor.LIGHT_BLUE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 2,
        xEnd: 2,
        yEnd: 3,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 21,
      price: 211,
      title: 'Whitehall',
      color: PropertyColor.RED,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 2,
        xEnd: 12,
        yEnd: 3,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 8,
      price: 71,
      level: 4,
      title: 'Bow Street',
      color: PropertyColor.LIGHT_BLUE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 3,
        xEnd: 2,
        yEnd: 4,
      },
    },
    {
      type: CellType.CHANCE,
      id: 22,
      color: PropertyColor.NONE,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 3,
        xEnd: 12,
        yEnd: 4,
      },
    },
    {
      type: CellType.CHANCE,
      id: 7,
      color: PropertyColor.NONE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 4,
        xEnd: 2,
        yEnd: 5,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 23,
      price: 215,
      title: 'Pentonville Road',
      color: PropertyColor.RED,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 4,
        xEnd: 12,
        yEnd: 5,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 6,
      price: 68,
      level: 3,
      title: 'Leicester Square',
      color: PropertyColor.LIGHT_BLUE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 5,
        xEnd: 2,
        yEnd: 6,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 24,
      price: 228,
      title: 'Pall Mall',
      color: PropertyColor.RED,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 5,
        xEnd: 12,
        yEnd: 6,
      },
    },
    {
      type: CellType.TRAIN_STATION,
      id: 5,
      price: 500,
      title: 'Marylebone Station',
      color: PropertyColor.NONE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 6,
        xEnd: 2,
        yEnd: 7,
      },
    },
    {
      type: CellType.TRAIN_STATION,
      id: 25,
      price: 1000,
      title: 'Kings Cross Station',
      color: PropertyColor.NONE,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 6,
        xEnd: 12,
        yEnd: 7,
      },
    },
    {
      type: CellType.TAX_COLLECTOR,
      id: 4,
      price: 100,
      color: PropertyColor.NONE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 7,
        xEnd: 2,
        yEnd: 8,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 26,
      price: 271,
      title: 'Bond Street',
      color: PropertyColor.YELLOW,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 7,
        xEnd: 12,
        yEnd: 8,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 3,
      price: 57,
      level: 2,
      title: 'Coventry Street',
      color: PropertyColor.BROWN,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 8,
        xEnd: 2,
        yEnd: 9,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 27,
      price: 320,
      title: 'Strand',
      color: PropertyColor.YELLOW,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 8,
        xEnd: 12,
        yEnd: 9,
      },
    },
    {
      type: CellType.COMMUNITY_CHEST,
      id: 2,
      color: PropertyColor.NONE,
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 9,
        xEnd: 2,
        yEnd: 10,
      },
    },
    {
      type: CellType.SPECIAL_PROPERTY,
      id: 28,
      price: 8,
      specialType: SpecialType.LAMP,
      title: 'Whater Works',
      color: PropertyColor.NONE,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 9,
        xEnd: 12,
        yEnd: 10,
      },
    },
    {
      type: CellType.PROPERTY,
      color: PropertyColor.BROWN,
      id: 1,
      price: 15,
      level: 1,
      title: 'Vine Street',
      rotation: CellRotation.LEFT,
      position: {
        xStart: 1,
        yStart: 10,
        xEnd: 2,
        yEnd: 11,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 29,
      price: 370,
      title: 'Regent Street',
      color: PropertyColor.YELLOW,
      rotation: CellRotation.RIGHT,
      position: {
        xStart: 11,
        yStart: 10,
        xEnd: 12,
        yEnd: 11,
      },
    },
    {
      type: CellType.START,
      id: 0,
      color: PropertyColor.NONE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 1,
        yStart: 11,
        xEnd: 2,
        yEnd: 12,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 39,
      price: 1800,
      level: 1,
      title: 'Mayfair',
      color: PropertyColor.DARK_BLUE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 2,
        yStart: 11,
        xEnd: 3,
        yEnd: 12,
      },
    },
    {
      type: CellType.TAX_COLLECTOR,
      id: 38,
      price: 200,
      color: PropertyColor.NONE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 3,
        yStart: 11,
        xEnd: 4,
        yEnd: 12,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 37,
      level: 2,
      price: 562,
      title: 'Park Lane',
      color: PropertyColor.DARK_BLUE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 4,
        yStart: 11,
        xEnd: 5,
        yEnd: 12,
      },
    },
    {
      type: CellType.CHANCE,
      id: 36,
      color: PropertyColor.NONE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 5,
        yStart: 11,
        xEnd: 6,
        yEnd: 12,
      },
    },
    {
      type: CellType.TRAIN_STATION,
      id: 35,
      price: 1500,
      title: 'Liverpool Street Station',
      color: PropertyColor.NONE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 6,
        yStart: 11,
        xEnd: 7,
        yEnd: 12,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 34,
      level: 3,
      price: 550,
      title: 'Oxford Street',
      color: PropertyColor.GREEN,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 7,
        yStart: 11,
        xEnd: 8,
        yEnd: 12,
      },
    },
    {
      type: CellType.COMMUNITY_CHEST,
      id: 33,
      color: PropertyColor.NONE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 8,
        yStart: 11,
        xEnd: 9,
        yEnd: 12,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 32,
      level: 4,
      price: 440,
      title: 'Piccadilly',
      color: PropertyColor.GREEN,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 9,
        yStart: 11,
        xEnd: 10,
        yEnd: 12,
      },
    },
    {
      type: CellType.PROPERTY,
      id: 31,
      level: 5,
      price: 404,
      title: 'Euston Road',
      color: PropertyColor.GREEN,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 10,
        yStart: 11,
        xEnd: 11,
        yEnd: 12,
      },
    },
    {
      type: CellType.GO_TO_JAIL,
      id: 30,
      color: PropertyColor.NONE,
      rotation: CellRotation.DOWN,
      position: {
        xStart: 11,
        yStart: 11,
        xEnd: 12,
        yEnd: 12,
      },
    },
  ],
};

export const Board: FC = () => {
  return (
    <div className={classes['board']}>
      <div className={classes['center']} />
      {board.cells.map((cell: CellInterface) => {
        return cellViews[cell.type](cell);
      })}
    </div>
  );
};
