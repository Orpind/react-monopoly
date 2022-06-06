import { FC } from 'react';
import cls from 'classnames';

import classes from './Button.module.scss';

export interface ButtonProps {
  onClick: () => void;
  children?: JSX.Element | string;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cls([classes['button'], className])}
    >
      {children}
    </button>
  );
};
