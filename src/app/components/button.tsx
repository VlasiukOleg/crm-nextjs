'use client';

import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100'
      )}
    />
  );
}
