import { ComponentProps } from 'react';

import { cn } from '../../libs/classNames.utils';

import DrawerSection from './section';

function DrawerHeader<T extends React.ElementType = 'header'>(
  props: ComponentProps<T>
) {
  const { className } = props;

  return (
    <DrawerSection
      as="header"
      {...props}
      className={cn('flex flex-col gap-y-2 items-start', className)}
    />
  );
}

export default DrawerHeader;
