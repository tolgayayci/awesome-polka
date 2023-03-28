import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";
import Activity from "../../../../components/Dashboard/ProjectOwner/Project/Activity/Activity";

export default function GitHubActivityPage() {
  return <Activity />;
}

GitHubActivityPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
