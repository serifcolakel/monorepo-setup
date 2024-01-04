import { ComponentProps, useCallback } from 'react';

import { ObjectKeys } from '../../utils/type.utils';

import { drawerTriggerActions } from './constants';
import { useDrawerContext } from '.';

type DrawerTriggerActions = ObjectKeys<typeof drawerTriggerActions>;

export type DrawerTriggerProps = {
  children: React.ReactNode;
  action?: DrawerTriggerActions;
} & ComponentProps<'button'>;

function DrawerTrigger({
  children,
  action = drawerTriggerActions.toggle,
  ...props
}: DrawerTriggerProps) {
  const { handleToggle, handleClose, handleOpen } = useDrawerContext();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (action === drawerTriggerActions.toggle) {
        handleToggle();
      } else if (action === drawerTriggerActions.open) {
        handleOpen();
      } else if (action === drawerTriggerActions.close) {
        handleClose();
      }

      props?.onClick?.(e);
    },
    [action, handleToggle, handleOpen, handleClose, props]
  );

  return (
    <button
      type="button"
      {...props}
      aria-label="Toogle Drawer"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default DrawerTrigger;
