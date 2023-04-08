import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";
import EditArticle from "../../../../components/Dashboard/ProjectOwner/Articles/Editor/Edit/Edit";

export default function JobsPage() {
  return <EditArticle />;
}

JobsPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
