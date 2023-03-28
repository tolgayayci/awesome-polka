import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";

import Jobs from "../../../../components/Dashboard/ProjectOwner/Project/Jobs/Jobs";

export default function JobsPage() {
  return <Jobs />;
}

JobsPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
