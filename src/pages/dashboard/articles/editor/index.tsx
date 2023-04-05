import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../../../layouts/ProjectOwnerLayout";

import ArticleEditor from "../../../../components/Dashboard/ProjectOwner/Articles/Editor/Editor";

export default function JobsPage() {
  return <ArticleEditor />;
}

JobsPage.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
