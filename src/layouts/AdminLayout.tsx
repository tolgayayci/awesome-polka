import { ReactNode } from "react";
import Header from "../components/Dashboard/Admin/Header/Header";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
