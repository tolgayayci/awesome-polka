// ** React Imports
import type { ReactElement } from "react";

// ** Custom Components
import ProjectDescription from "../../../../components/Dashboard/ProjectOwner/Project/Description/Description";

// ** Layouts
import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";

export default function DescriptionPage() {
  return <ProjectDescription />;
}

DescriptionPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
