import { ReactNode } from "react";
import Header from "../components/Dashboard/ProjectOwner/Header/Header";

interface Props {
  children: ReactNode;
}

export default function ProjectOwnerLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
