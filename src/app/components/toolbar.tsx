import * as React from 'react';

export interface ToolBarProps {
  children: React.ReactNode;
  action: React.ReactNode;
}

export default function ToolBar({ children, action }: ToolBarProps) {
  return (
    <div className="flex px-10 py-8 items-center">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
}
