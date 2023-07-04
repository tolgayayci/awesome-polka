import { ReactNode } from "react";

import Header from "../components/Admin/Header/Header";
import Footer from "../components/Admin/Footer/Footer";
import { Toaster } from "react-hot-toast";

import { useCheckAuth } from "../hooks/useCheckAuth";
import { UserType } from "../API";

import FourOhFour from "../pages/404";
import UserLayout from "./UserLayout";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  const { isAuthenticated, isLoading, user } = useCheckAuth();

  if (isLoading) {
    console.log("Auth Status Checking");
  }

  return (
    <>
      {isAuthenticated && user?.type == UserType.ADMIN ? (
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      ) : (
        <UserLayout>
          <FourOhFour />
        </UserLayout>
      )}
    </>
  );
}
