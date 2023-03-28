import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";

import Faq from "../../../../components/Dashboard/ProjectOwner/Project/Faq/Faq";

export default function FaqPage() {
  return <Faq />;
}

FaqPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
