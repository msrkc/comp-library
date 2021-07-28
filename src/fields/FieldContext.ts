import React from 'react';

export const FieldContext = React.createContext<string | undefined>(undefined);

export function useField(): string | undefined {
  const context = React.useContext(FieldContext);
  if (context === undefined) {
    throw new Error(`useField must be used within a FieldProvider`);
  }
  return context;
}
