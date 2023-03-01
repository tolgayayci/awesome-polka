import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}