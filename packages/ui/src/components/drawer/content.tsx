import { ComponentProps } from 'react';

import { cn } from '../../libs/classNames.utils';

type DrawerContentProps = {
  children: React.ReactNode;
} & ComponentProps<'main'>;

function DrawerContent({ children }: DrawerContentProps) {
  return (
    <main
      className={cn(
        'flex flex-col w-full h-full p-6 gap-x-4 gap-y-4 overflow-y-auto'
      )}
    >
      {children}
    </main>
  );
}

export default DrawerContent;
