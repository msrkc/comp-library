import React from 'react';
import { useField } from './FieldContext';
import { StyledLabel } from './styles';

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useField();

  return <StyledLabel ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
