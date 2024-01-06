import { useId } from 'react';

import useEventListener from '../../hooks/useEventListener';
import { cn } from '../../libs/classNames.utils';
import PortalPrimitive from '../../primitives/portal-primitive';

import { useDrawerContext } from '.';

export type DrawerPanelProps = {
  className?: string;
  children: React.ReactNode;
  justify?: 'justify-start' | 'justify-end' | 'justify-center';
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

  const getAnimation = () => {
    if (justify === 'justify-start') {
      return 'animate-slideInLeft';
    }

    return 'animate-slideInRight';
  };

  if (!isOpen) {
    return null;
  }

  return (
    <PortalPrimitive
      childId={childId}
      elementClass={cn(
        'flex items-center',
        getAnimation(),
        justify,
        drawerWrapperClassName
      )}
      id={id}
    >
      <div
        className={cn(
          'flex flex-col md:w-[420px] w-11/12',
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
