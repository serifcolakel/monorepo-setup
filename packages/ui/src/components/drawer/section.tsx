import { ComponentProps } from 'react';

import { cn } from '../../libs/classNames.utils';

export type DrawerSectionBaseProps = {
  align?: 'items-start' | 'items-center' | 'items-end';
  gap?: 'gap-x-0' | 'gap-x-2' | 'gap-x-4' | 'gap-x-6';
  padding?: 'p-0' | 'p-2' | 'p-4' | 'p-6' | 'p-8';
  justify?: 'justify-start' | 'justify-center' | 'justify-end';
  children: React.ReactNode;
};

export type DrawerSectionProps = DrawerSectionBaseProps &
  (
    | (ComponentProps<'footer'> & { as: 'footer' })
    | (ComponentProps<'header'> & { as: 'header' })
  );

function DrawerSection({
  children,
  align = 'items-center',
  gap = 'gap-x-4',
  padding = 'p-4',
  justify = 'justify-end',
  as,
  className,
  ...props
}: DrawerSectionProps) {
  const Component = as;

  return (
    <Component
      {...props}
      className={cn('flex', align, gap, padding, justify, className)}
    >
      {children}
    </Component>
  );
}

export default DrawerSection;
