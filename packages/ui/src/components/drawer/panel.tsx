import { CSSProperties, useId } from 'react';

import useEventListener from '../../hooks/useEventListener';
import { cn } from '../../libs/classNames.utils';
import PortalPrimitive from '../../primitives/portal-primitive';

import { useDrawerContext } from '.';

export type DrawerPanelProps = {
  className?: string;
  children: React.ReactNode;
  justify?: CSSProperties['justifyContent'];
  canCloseWithBackDrop?: boolean;
  drawerWrapperClassName?: string;
};

function DrawerPanel({
  className = '',
  justify = 'justify-end',
  canCloseWithBackDrop = true,
  drawerWrapperClassName,
  children,
}: DrawerPanelProps) {
  const id = useId();

  const childId = useId();

  const { isOpen, handleClose } = useDrawerContext();

  useEventListener('click', (e) => {
    if (!isOpen || !canCloseWithBackDrop) {
      return;
    }

    const target = e.target as HTMLElement;

    const child = document.getElementById(childId);

    if (target.id === child?.id) {
      handleClose();
    }
  });

  if (!isOpen) {
    return null;
  }

  return (
    <PortalPrimitive
      childId={childId}
      elementClass={cn(
        'flex items-center',
        justify === 'justify-start'
          ? 'animate-slideInLeft'
          : 'animate-slideInRight',
        justify,
        drawerWrapperClassName
      )}
      id={id}
    >
      <div
        className={cn(
          'flex flex-col md:max-w-[420px] w-11/12',
          'h-full bg-white justify-between overflow-hidden relative',
          className
        )}
      >
        {children}
      </div>
    </PortalPrimitive>
  );
}

export default DrawerPanel;
