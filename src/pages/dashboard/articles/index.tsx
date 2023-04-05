import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../layouts/ProjectOwnerLayout";
import Articles from "../../../components/Dashboard/ProjectOwner/Articles/Articles";

export default function ArticlesPage() {
  return (
    <>
      <Articles />
    </>
  );
}

ArticlesPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
