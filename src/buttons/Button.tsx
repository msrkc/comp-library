import React from 'react';
import PropsTypes from 'prop-types';
import { StyledButton } from './styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        type="button"
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  variant: 'secondary',
  size: 'medium',
  isFullWidth: false,
};

Button.displayName = 'Button';

Button.propTypes = {
  variant: PropsTypes.oneOf(['secondary', 'primary', 'danger']),
  size: PropsTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropsTypes.bool,
};
