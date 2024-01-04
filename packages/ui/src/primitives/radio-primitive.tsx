import { ComponentPropsWithRef, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../libs/classNames.utils';

export type RadioElementProps = ComponentPropsWithRef<'input'>;

export const radioStyles = cva('group-hover:cursor-pointer', {
  variants: {
    intent: {
      default:
        'accent-primary-600 text-primary-600 focus:ring-primary-600 focus:border-primary-600',
      success:
        'accent-green-500 text-green-500 focus:ring-green-500 focus:border-green-500',
      info: 'accent-indigo-500 text-indigo-500 focus:ring-indigo-500 focus:border-indigo-500 ',
      warning:
        'accent-yellow-500 text-yellow-500 focus:ring-yellow-500 focus:border-yellow-500',
      danger:
        'accent-red-500 text-red-500 focus:ring-red-500 focus:border-red-500',
      error:
        'accent-red-600 text-red-600 focus:ring-red-600 focus:border-red-600',
    },
    inputSize: {
      default: 'w-4 h-4',
      sm: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
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
    rounded: 'full',
    intent: 'default',
  },
});

export interface RadioPrimitiveProps
  extends RadioElementProps,
    VariantProps<typeof radioStyles> {}

function Radio({
  className,
  inputSize,
  rounded,
  intent,
  ...props
}: RadioPrimitiveProps) {
  return (
    <input
      {...props}
      className={cn(
        'cursor-pointer',
        radioStyles({ inputSize, rounded, intent }),
        className,
        props.disabled &&
          'group-hover:cursor-not-allowed disabled:text-gray-300 disabled:cursor-not-allowed '
      )}
      type="radio"
    />
  );
}

const RadioPrimitive = forwardRef<HTMLInputElement, RadioPrimitiveProps>(
  (props, ref) => <Radio {...props} ref={ref} />
);

export default RadioPrimitive;
