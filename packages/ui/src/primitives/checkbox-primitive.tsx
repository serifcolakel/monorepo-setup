import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../libs/classNames.utils';

export type CheckboxElementProps = ComponentPropsWithRef<'input'>;

export const checkBoxStyles = cva('group-hover:cursor-pointer', {
  variants: {
    intent: {
      default:
        'text-primary-600 focus:ring-primary-600 focus:border-primary-600',
      success: 'text-green-500 focus:ring-green-500 focus:border-green-500',
      info: 'text-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 ',
      warning: 'text-yellow-500 focus:ring-yellow-500 focus:border-yellow-500',
      danger: 'text-red-500 focus:ring-red-500 focus:border-red-500',
      error: 'text-red-600 focus:ring-red-600 focus:border-red-600',
    },
    inputSize: {
      default: 'w-4 h-4',
      sm: 'w-5 h-5',
      lg: 'w-6 h-6',
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
  },
  compoundVariants: [{}],
  defaultVariants: {
    inputSize: 'default',
    rounded: 'default',
    intent: 'default',
  },
});

export interface CheckboxPrimitiveProps
  extends CheckboxElementProps,
    VariantProps<typeof checkBoxStyles> {
  label?: string;
}

function Checkbox({
  className,
  inputSize,
  rounded,
  intent,
  ...props
}: CheckboxPrimitiveProps) {
  return (
    <input
      className={cn(
        checkBoxStyles({ inputSize, rounded, intent }),
        className,
        props.disabled &&
          'group-hover:cursor-not-allowed cursor-not-allowed opacity-50 text-gray-500'
      )}
      type="checkbox"
      {...props}
    />
  );
}

export const CheckboxPrimitive = forwardRef<
  HTMLInputElement,
  CheckboxPrimitiveProps
>((props, ref) => <Checkbox {...props} ref={ref} />);

export default CheckboxPrimitive;
