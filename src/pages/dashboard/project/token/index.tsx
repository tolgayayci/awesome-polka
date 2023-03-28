import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";
import Token from "../../../../components/Dashboard/ProjectOwner/Project/Token/Token";

export default function TokenPage() {
  return <Token />;
}

TokenPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
