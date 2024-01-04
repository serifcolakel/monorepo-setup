import { CSSProperties, MutableRefObject, useEffect, useRef } from 'react';

import { cn } from '../libs/classNames.utils';

type PortalAttributes = CSSProperties;

export interface UsePortalOptions {
  id: string;
  className?: string;
  attributes?: PortalAttributes;
  elementClass?: string;
  childId?: string;
}

interface UsePortalResult {
  elRef: MutableRefObject<HTMLDivElement | null>;
  id: string;
}

/**
 * @description A hook to create a portal
 * @param {UsePortalOptions} props
 * @returns {UsePortalResult}
 */
const usePortal = ({
  id,
  attributes = {},
  className,
  elementClass,
  childId,
}: UsePortalOptions): UsePortalResult => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    let portalRoot = document.getElementById(id);

    if (!portalRoot) {
      portalRoot = document.createElement('dialog');
      portalRoot.setAttribute('id', id);
      Object.entries(attributes).forEach(([key, value]) => {
        portalRoot!.setAttribute(key, value);
      });
      portalRoot.setAttribute(
        'class',
        cn(
          'fixed inset-0 z-50 flex bg-black bg-opacity-50 w-full h-full',
          className ?? ''
        )
      );

      document.body.appendChild(portalRoot);
    } else {
      portalRoot.setAttribute('id', id);
      Object.entries(attributes).forEach(([key, value]) => {
        portalRoot!.setAttribute(key, value);
      });
    }

    const currentElRef = elRef.current;

    portalRoot!.appendChild(currentElRef!);

    currentElRef!.setAttribute(
      'class',
      cn('w-full h-full', elementClass ?? '')
    );

    if (childId) currentElRef!.setAttribute('id', childId);

    return () => {
      if (currentElRef && portalRoot && portalRoot.contains(currentElRef)) {
        portalRoot.removeChild(currentElRef);
      }

      if (portalRoot) {
        portalRoot.remove();
      }
    };
  }, [className, attributes, id, elementClass, childId]);

  return {
    elRef,
    id,
  };
};

export default usePortal;
