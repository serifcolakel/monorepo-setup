import { MutableRefObject, useEffect, useRef } from 'react';

import { cn } from '@serif/ui/utils';

type PortalAttributes = Record<string, string>;

interface UsePortalOptions {
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

const usePortal = ({
  id,
  attributes = {},
  className,
  elementClass,
  childId,
}: UsePortalOptions): UsePortalResult => {
  const elRef = useRef<HTMLDivElement | null>(null);

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
          className
        )
      );

      document.body.appendChild(portalRoot);
    } else {
      Object.entries(attributes).forEach(([key, value]) => {
        portalRoot!.setAttribute(key, value);
      });
    }

    const currentElRef = elRef.current;

    portalRoot!.appendChild(currentElRef!);

    currentElRef!.setAttribute('class', cn('w-full h-full', elementClass));

    if (childId) currentElRef!.setAttribute('id', childId);

    return () => {
      if (currentElRef && portalRoot) {
        portalRoot.removeChild(currentElRef);
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
