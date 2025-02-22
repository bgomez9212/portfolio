import { ReactNode } from "react";

export default function Section({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <div className="pt-mobileNav sm:pt-navbar flex flex-col w-4/5" id={id}>
      <h1 className="text-3xl underline scroll-view">{title}</h1>
      <div className="flex justify-evenly flex-wrap">{children}</div>
    </div>
  );
}
