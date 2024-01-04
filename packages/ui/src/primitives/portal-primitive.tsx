import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

import usePortal from '../hooks/usePortal';

export type PortalAttributes = {
  [key: string]: string;
};

export type PortalPrimitiveProps = {
  children: ReactNode;
  className?: string;
  attributes?: PortalAttributes;
  id?: string;
  elementClass?: string;
  childId?: string;
};

function PortalPrimitive({
  children,
  className = '',
  id = 'portal',
  elementClass = '',
  attributes = {},
  childId,
}: PortalPrimitiveProps) {
  const { elRef } = usePortal({
    attributes,
    className,
    id,
    elementClass,
    childId,
  });

  return createPortal(children, elRef.current as HTMLElement);
}

PortalPrimitive.displayName = 'PortalPrimitive';

export default PortalPrimitive;
