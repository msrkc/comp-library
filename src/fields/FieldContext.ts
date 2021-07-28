import React from 'react';
interface IFieldContext {
  id?: string;
}

export const FieldContext = React.createContext<IFieldContext>({});

export function useField(): IFieldContext {
  const context = React.useContext(FieldContext);
  if (context === undefined) {
    throw new Error(`useField must be used within a FieldProvider`);
  }
  return context;
}
