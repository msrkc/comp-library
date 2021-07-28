import React from 'react';
import { customAlphabet } from 'nanoid/non-secure';

const nanoId = customAlphabet('123456789cav', 10);

export const useId = (): string => {
  const [id] = React.useState(nanoId);
  return id;
};
