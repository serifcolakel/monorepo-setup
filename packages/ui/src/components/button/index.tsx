import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../libs/classNames.utils';

const buttonStyles = cva(
  'flex flex-row items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-black focus:!ring-offset-white',
  {
    variants: {
      intent: {
        default: 'bg-gray-100 text-gray-900',
        primary: 'bg-primary-500 text-white',
        danger: 'bg-red-500 text-white',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
      gap: {
        default: 'px-4 py-2',
        lg: 'px-6 py-3',
        sm: 'px-2 py-1',
      },
    },
    defaultVariants: {
      intent: 'default',
      rounded: 'default',
      gap: 'default',
    },
  }
);

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles>;

export function Button({
  intent,
  gap,
  rounded,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={cn(buttonStyles({ intent, gap, rounded }), className)}
    >
      {props.children}
    </button>
  );
}
