import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { DrawerContext, useDrawerKeyBinding } from './hooks';

type DrawerProviderProps = {
  initialOpen?: boolean;
};

export default function DrawerProvider({
  children,
  initialOpen,
}: PropsWithChildren<DrawerProviderProps>) {
  const [isOpen, setIsOpen] = useState(!!initialOpen);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useDrawerKeyBinding(handleOpen, handleClose);

  const ctx = useMemo(
    () => ({
      isOpen,
      handleOpen,
      handleClose,
      handleToggle,
    }),
    [isOpen, handleOpen, handleClose, handleToggle]
  );

  return (
    <DrawerContext.Provider value={ctx}>{children}</DrawerContext.Provider>
  );
}
