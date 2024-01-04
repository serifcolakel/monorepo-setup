/* eslint-disable max-len */
import { ComponentPropsWithRef, forwardRef, useId } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../libs/classNames.utils';

export type SwitchElementProps = ComponentPropsWithRef<'input'>;

export const switchStyles = cva(
  'group-hover:cursor-pointer peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-offset-2',
  {
    variants: {
      intent: {
        default:
          'peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-700',
        success:
          'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
        warning:
          'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-600',
        danger:
          'peer-focus:ring-danger-300 dark:peer-focus:ring-danger-800 peer-checked:bg-danger-600',
        error:
          'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
      },
      inputSize: {
        default: 'w-11 h-6',
        second: 'w-11 h-4',
        sm: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-10 h-10',
      },
      selected: {
        default:
          'peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full',
      },
      after: {
        default:
          'after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600',
        second:
          'after:content-[""] after:absolute after:top-[-2px] after:start-[-2px] border-red-500 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-focus:ring-offset-[5.5px]',
      },
      bg: {
        default: 'bg-gray-200 dark:bg-gray-200',
      },
      rounded: {
        default: 'rounded',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        xxl: 'rounded-2xl',
        none: 'rounded-none',
        full: 'rounded-full',
      },
      labelGap: {
        default: 'gap-x-4',
        sm: 'gap-x-2',
        lg: 'gap-x-6',
        xl: 'gap-x-8',
      },
    },
    compoundVariants: [{}],
    defaultVariants: {
      inputSize: 'default',
      rounded: 'full',
      intent: 'default',
      after: 'default',
      bg: 'default',
      selected: 'default',
      labelGap: 'default',
    },
  }
);

const labelStyles = cva(
  'relative inline-flex items-center cursor-pointer select-none',
  {
    variants: {
      labelGap: {
        default: 'gap-x-4',
        sm: 'gap-x-2',
        lg: 'gap-x-6',
        xl: 'gap-x-8',
      },
    },
    defaultVariants: {
      labelGap: 'default',
    },
  }
);

function SwitchLabel({ ...props }: ComponentPropsWithRef<'span'>) {
  return (
    <span
      {...props}
      className={cn(
        'text-sm font-medium text-gray-700 dark:text-gray-300',
        props.className
      )}
    />
  );
}

export interface SwitchPrimitiveProps
  extends SwitchElementProps,
    VariantProps<typeof labelStyles>,
    VariantProps<typeof switchStyles> {
  label?: string;
  children?: React.ReactNode;
}

function Switch({
  className,
  inputSize,
  after,
  bg,
  rounded,
  labelGap,
  intent,
  children,
  ...props
}: SwitchPrimitiveProps) {
  const id = `Switch-${useId()}`;

  return (
    <label className={cn(labelStyles({ labelGap }))} htmlFor={id}>
      <input className="sr-only peer" type="checkbox" {...props} id={id} />
      <div
        className={cn(switchStyles({ inputSize, after, bg, rounded, intent }))}
      />
      {children || <SwitchLabel>{props.label}</SwitchLabel>}
    </label>
  );
}

interface SwitchPrimitiveComponent
  extends React.ForwardRefExoticComponent<
    Omit<SwitchPrimitiveProps, 'ref'> & React.RefAttributes<HTMLInputElement>
  > {
  Label: typeof SwitchLabel;
}

const SwitchPrimitive = forwardRef<HTMLInputElement, SwitchPrimitiveProps>(
  (props, ref) => <Switch {...props} ref={ref} />
) as SwitchPrimitiveComponent;

SwitchPrimitive.Label = SwitchLabel;

export default SwitchPrimitive;
