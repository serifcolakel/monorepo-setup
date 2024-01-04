import { createContext, useContext } from 'react';

import useEventListener from '../../hooks/useEventListener';

import { keyMap } from './constants';
import { DrawerContextType } from './types';

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

const useDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('Drawer must be used within a Drawer');
  }

  return context;
};

const useDrawerKeyBinding = (onOpen: () => void, onClose: () => void) => {
  useEventListener('keydown', (event) => {
    const { code, shiftKey, ctrlKey, altKey } = event;

    if (
      keyMap.close.codes.includes(code) &&
      keyMap.close.shiftKey === shiftKey &&
      keyMap.close.ctrlKey === ctrlKey &&
      keyMap.close.altKey === altKey
    ) {
      onClose();
    }

    if (
      keyMap.open.codes.includes(code) &&
      (keyMap.open.shiftKey === shiftKey ||
        keyMap.open.ctrlKey === ctrlKey ||
        keyMap.open.altKey === altKey)
    ) {
      onOpen();
    }
  });
};

export { DrawerContext, useDrawerContext, useDrawerKeyBinding };
