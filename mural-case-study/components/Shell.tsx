import type { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
  className?: string;
};

export function Shell({ children, className = "" }: ShellProps) {
  return (
    <div
      className={`mx-auto w-full max-w-wide px-6 sm:px-10 lg:px-14 ${className}`}
    >
      {children}
    </div>
  );
}
