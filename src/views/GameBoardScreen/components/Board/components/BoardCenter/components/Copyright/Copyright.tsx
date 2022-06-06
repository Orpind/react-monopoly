import { FC } from 'react';
import cls from 'classnames';

import classes from './Copyright.module.scss';

export interface CopyrightProps {
  onClose: () => void;
}

export const Copyright: FC<CopyrightProps> = ({ onClose }) => {
  return (
    <div className={classes['info']}>
      <button
        onClick={onClose}
        className={cls([classes['button']], classes['info__button'])}
      >
        Close
      </button>

      <div>
        Icons made by&nbsp;&nbsp;
        <a
          href="https://www.flaticon.com/authors/creaticca-creative-agency"
          title="Creaticca Creative Agency"
        >
          Creaticca Creative Agency
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
          Good Ware
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/kiranshastry"
          title="Kiranshastry"
        >
          Kiranshastry
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{' '}
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/those-icons"
          title="Those Icons"
        >
          Those Icons
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a href="https://www.flaticon.com/authors/nawicon" title="nawicon">
          nawicon
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a href="https://www.flaticon.com/authors/mattbadal" title="mattbadal">
          mattbadal
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/yehor-lisnyi"
          title="Yehor Lisnyi"
        >
          Yehor Lisnyi
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};
