import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../layouts/ProjectOwnerLayout";

export default function Dashboard() {
  return null;
}

Dashboard.auth = false;
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
