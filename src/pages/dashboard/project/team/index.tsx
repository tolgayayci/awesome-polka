import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";
import Team from "../../../../components/Dashboard/ProjectOwner/Project/Team/Team";

export default function TeamPage() {
  return <Team />;
}

TeamPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
