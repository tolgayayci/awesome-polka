import type { ReactElement } from "react";

import AdminLayout from "../../../layouts/AdminLayout";
import ProjectOwnerLayout from "../../../layouts/ProjectOwnerLayout";

import Articles from "../../../components/Dashboard/ProjectOwner/Articles/Articles";

let userType = "projectOwner";

export default function ArticlesPage() {
  return (
    <>
      <section className="container max-w-8xl mx-auto">
        <Articles />
      </section>
    </>
  );
}

ArticlesPage.getLayout = function getLayout(page: ReactElement) {
  if (userType === "admin") {
    return <AdminLayout>{page}</AdminLayout>;
  } else if (userType === "projectOwner") {
    return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
  } else {
    return null;
  }
};
