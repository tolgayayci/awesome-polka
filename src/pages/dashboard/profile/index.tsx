import type { ReactElement } from "react";

import Profile from "../../../components/Dashboard/ProjectOwner/Profile/Profile";

import AdminLayout from "../../../layouts/AdminLayout";
import ProjectOwnerLayout from "../../../layouts/ProjectOwnerLayout";

let userType = "projectOwner";

export default function ProfilePage() {
  return (
    <>
      <section className="container max-w-8xl mx-auto">
        <Profile />
      </section>
    </>
  );
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  if (userType === "admin") {
    return <AdminLayout>{page}</AdminLayout>;
  } else if (userType === "projectOwner") {
    return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
  } else {
    return null;
  }
};
