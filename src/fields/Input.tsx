import React from 'react';
import { useField } from './FieldContext';
import { StyledInput } from './styles';

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<'input'>
>((props, ref) => {
  const { id } = useField();

  return <StyledInput ref={ref} id={id} />;
});

Input.displayName = 'Field.Input';
