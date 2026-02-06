import { HTMLAttributes } from "react";

export type PagePaddingWrapperTypes = HTMLAttributes<HTMLDivElement>;

export function PagePaddingWrapper({
  children,
  ...props
}: PagePaddingWrapperTypes) {
  return (
    <div className="flex w-full justify-center">
      <div className={`flex-1 m-10 max-w-5xl ${props}`}>{children}</div>
    </div>
  );
}
