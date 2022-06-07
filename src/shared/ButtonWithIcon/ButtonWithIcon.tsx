import { FC } from 'react';
import { Button, ButtonProps } from '../Button';

import classes from './ButtonWithIcon.module.scss';

export interface ButtonWithIconProps extends ButtonProps {
  icon?: string;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  children,
  className,
  onClick,
  icon,
  disabled,
}) => {
  return (
    <Button onClick={onClick} className={className} disabled={disabled}>
      <>
        {icon && <img className={classes['image']} src={icon} alt="" />}
        {children}
      </>
    </Button>
  );
};
