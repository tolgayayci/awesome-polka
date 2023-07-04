import type { ReactElement } from "react";

import AdminLayout from "../../layouts/AdminLayout";
import Admin from "../../components/Admin/Admin/Admin";

export default function AdminPage() {
  return (
    <>
      <Admin />
    </>
  );
}

AdminPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
