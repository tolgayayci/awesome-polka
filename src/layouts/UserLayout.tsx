import { ReactNode } from "react";
import Header from "../components/Public/Header/Header";
import Footer from "../components/Public/Footer/Footer";

interface Props {
  children: ReactNode;
}

export default function UserLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
