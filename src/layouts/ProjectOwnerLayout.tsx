import { ReactNode } from "react";

import Header from "../components/Dashboard/ProjectOwner/Header/Header";
import Footer from "../components/Dashboard/ProjectOwner/Footer/Footer";
import { Toaster } from "react-hot-toast";

import { useCheckAuth } from "../hooks/useCheckAuth";

interface Props {
  children: ReactNode;
}

export default function ProjectOwnerLayout({ children }: Props) {
  const { isAuthenticated, isLoading } = useCheckAuth();

  if (isLoading) {
    console.log("Auth Status Checking");
  }

  return (
    <>
      {isAuthenticated ? (
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      ) : null}
    </>
  );
}
