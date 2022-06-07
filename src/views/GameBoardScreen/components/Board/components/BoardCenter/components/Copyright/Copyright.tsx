import { FC } from 'react';
import cls from 'classnames';

import classes from './Copyright.module.scss';
import { Button } from '../../../../../../../../shared';

export interface CopyrightProps {
  onClose: () => void;
}

export const Copyright: FC<CopyrightProps> = ({ onClose }) => {
  return (
    <div className={classes['copyright']}>
      <Button onClick={onClose} className={classes['copyright__button']}>
        Close
      </Button>

      <div className={classes['copyright__text']}>
        Icons made by&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/creaticca-creative-agency"
          title="Creaticca Creative Agency"
          rel="noreferrer"
        >
          Creaticca Creative Agency
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/good-ware"
          title="Good Ware"
          rel="noreferrer"
        >
          Good Ware
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/kiranshastry"
          title="Kiranshastry"
          rel="noreferrer"
        >
          Kiranshastry
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.freepik.com"
          title="Freepik"
          rel="noreferrer"
        >
          Freepik
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/"
          title="Flaticon"
          rel="noreferrer"
        >
          www.flaticon.com
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/those-icons"
          title="Those Icons"
          rel="noreferrer"
        >
          Those Icons
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/nawicon"
          title="nawicon"
          rel="noreferrer"
        >
          nawicon
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/mattbadal"
          title="mattbadal"
          rel="noreferrer"
        >
          mattbadal
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
          rel="noreferrer"
        >
          Pixel perfect
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
          rel="noreferrer"
        >
          Smashicons
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/authors/yehor-lisnyi"
          title="Yehor Lisnyi"
          rel="noreferrer"
        >
          Yehor Lisnyi
        </a>
        ,&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/free-icons/dice"
          title="Dice"
          rel="noreferrer"
        >
          Dice
        </a>
        ,&nbsp;
        <a href="https://www.flaticon.com/free-icons/trade" title="trade icons">
          Trade
        </a>
        ,&nbsp; from&nbsp;
        <a
          target="_blank"
          href="https://www.flaticon.com/"
          title="Flaticon"
          rel="noreferrer"
        >
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};
