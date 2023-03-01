import { ReactNode } from "react";
import Header from "../components/user/Header/Header";
import Footer from "../components/user/Footer/Footer";

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
