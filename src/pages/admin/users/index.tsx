import type { ReactElement } from "react";

import Users from "../../../components/Admin/Users/Users";

import AdminLayout from "../../../layouts/AdminLayout";

export default function UsersPage() {
  return (
    <>
      <section className="container max-w-8xl mx-auto">
        <Users />
      </section>
    </>
  );
}

UsersPage.auth = false;
UsersPage.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
