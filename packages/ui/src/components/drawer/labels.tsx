import { ComponentProps } from 'react';

import { cn } from '../../libs/classNames.utils';

type DrawerTitleProps = {
  children: React.ReactNode;
} & ComponentProps<'h2'>;

function DrawerTitle({ children, className, ...props }: DrawerTitleProps) {
  return (
    <h2 className={cn('text-xl font-semibold', className)} {...props}>
      {children}
    </h2>
  );
}

type DrawerDescriptionProps = {
  children: React.ReactNode;
} & ComponentProps<'p'>;

function DrawerDescription({
  children,
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <p className={cn('text-gray-500', className)} {...props}>
      {children}
    </p>
  );
}

export { DrawerDescription, DrawerTitle };
