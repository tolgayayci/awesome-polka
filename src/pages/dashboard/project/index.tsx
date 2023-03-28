import type { ReactElement } from "react";

import Project from "../../../components/Dashboard/ProjectOwner/Project/Project";
import ProjectOwnerLayout from "../../../layouts/ProjectOwnerLayout";

export default function ProjectPage() {
  return <Project />;
}

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
