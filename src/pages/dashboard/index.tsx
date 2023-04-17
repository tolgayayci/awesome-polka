import { useSession } from "next-auth/react";
import type { ReactElement } from "react";

import ProjectOwnerLayout from "../../layouts/ProjectOwnerLayout";
import ProjectOwnerHome from "../../components/Dashboard/ProjectOwner/Home/Home";

export default function Dashboard() {
  const { data: session } = useSession();

  return <ProjectOwnerHome />;
}

Dashboard.auth = true;
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <ProjectOwnerLayout>{page}</ProjectOwnerLayout>;
};
