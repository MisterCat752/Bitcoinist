import React from 'react';
import { cn } from '@/lib/cn';

export function Container({ children, className }) {
  return (
    <div className={cn('max-w-[1160px] mx-auto  px-4  ', className)}>
      {children}
    </div>
  );
}
