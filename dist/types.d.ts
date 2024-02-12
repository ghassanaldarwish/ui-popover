import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref">, "ref"> & React.RefAttributes<HTMLDivElement>>;

export { Popover, PopoverContent, PopoverTrigger };
