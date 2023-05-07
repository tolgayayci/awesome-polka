import type { ReactElement } from "react";

import Profile from "../../../components/Dashboard/ProjectOwner/Profile/Profile";

import ProjectOwnerLayout from "../../../layouts/ProjectOwnerLayout";

export default function ProfilePage() {
  return (
    <>
      <section className="container max-w-8xl mx-auto">
        <Profile />
      </section>
    </>
  );
}

ProfilePage.auth = false;
ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
