import { ReactNode } from "react";

import Header from "../components/Dashboard/ProjectOwner/Header/Header";
import Footer from "../components/Dashboard/ProjectOwner/Footer/Footer";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

export default function ProjectOwnerLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
