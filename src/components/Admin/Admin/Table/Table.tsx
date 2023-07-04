// ** React Imports
import { useMemo, useEffect, useState } from "react";

// ** Table Components
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";

import GlobalFilter from "./GlobalFilter/GlobalFilter";

import { createUserAttribute } from "../../../../data/mutations/createUserAttribute";
import { createProjectAttribute } from "../../../../data/mutations/createProjectAttribute";

import type { ApplicationProps } from "../../../../types/types";
import { UserStatus, UserType, ProjectStatus } from "../../../../API";

// ** Style Imports
import styles from "./Table.module.scss";

export default function ApplicationsTable(props: {
  applications: Array<ApplicationProps | null>;
}) {
  const [info, setInfo] = useState(Array<ApplicationProps | null>);

  async function handleRegistration(application: ApplicationProps) {
    console.log("handleRegistration");

    const user = await createUserAttribute({
      walletAddress: application.walletAddress,
      username: application.username,
      status: UserStatus.APPROVED,
      type: UserType.PROJECT_OWNER,
    });

    const project = await createProjectAttribute({
      slug: "slug223",
      status: ProjectStatus.LIVE,
      name: application.projectName,
      bio: application.projectBio,
      userWalletAddress: application.walletAddress,
    });

    Promise.all([user, project])
      .then((values) => {
        console.log(values);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function rejectRegistration(application: ApplicationProps) {
    console.log("rejectRegistration");
  }

  useEffect(() => {
    console.log(props.applications);
    setInfo(props.applications);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "projectDetails",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="w-full">
                      <span className="text-lg font-bold">
                        {row.original.projectName}
                      </span>
                      <span className="text-xs font-semibold block pt-1">
                        {row.original.projectBio}
                      </span>
                    </div>
                    {/* <div className="flex items-center">
                      {row.original.status === ProjectStatus.LIVE ? (
                        <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                          {row.original.status}
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                          {row.original.status}
                        </span>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        },
      },
      {
        Header: "User Details",
        accessor: "userDetails",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <div className="w-full">
                  <div className="flex items-center">
                    <div className="w-full">
                      <span className="text-lg font-bold">
                        {row.original.username}
                      </span>
                      <span className="text-xs font-semibold block pt-1">
                        {row.original.walletAddress}
                      </span>
                    </div>
                    {/* <div className="flex items-center">
                      {row.original.user.status === UserStatus.APPROVED ? (
                        <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                          {row.original.user.status}
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-red-900 font-bold">
                          {row.original.user.status}
                        </span>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Modify",
        accessor: "modify",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <div className="mr-4">
                  <button
                    className="text-xs font-semibold bg-green-100 text-green-700 border-green-600 border-2 px-2.5 py-1 rounded-lg"
                    onClick={() => handleRegistration(row.original)}
                  >
                    Approve
                  </button>

                  <button
                    className="text-xs font-semibold bg-red-100 text-red-700 border-red-600 border-2 px-2.5 py-1 rounded-lg ml-4"
                    onClick={() => rejectRegistration(row.original)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </>
          );
        },
      },
    ],
    []
  );

  const data = useMemo(() => info, [info]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      // eslint-disable-next-line
      // @ts-ignore
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <section className="relative container mx-auto scroll-smooth max-w-8xl">
      <div className="container mx-auto">
        <div className="flex justify-between mb-6">
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <div>
            {headerGroups.map((headerGroup) =>
              headerGroup.headers.map((column) =>
                column.Filter ? (
                  <div key={column.id}>{column.render("Filter")}</div>
                ) : null
              )
            )}
          </div>
        </div>
        <div className="">
          <div className={styles.tableWrapper}>
            <div {...getTableProps()} className={styles.table}>
              {headerGroups.map((headerGroup) => (
                // Apply the header row props
                <div
                  {...headerGroup.getHeaderGroupProps()}
                  key={headerGroup.id}
                  className={styles.tr}
                >
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <div
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        key="h1"
                        className={styles.th}
                      >
                        {
                          // Render the header
                          column.render("Header")
                        }
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " ▼"
                              : " ▲"
                            : ""}
                        </span>
                      </div>
                    ))
                  }
                </div>
              ))}
              {/* Apply the table body props */}
              <div {...getTableBodyProps()}>
                {
                  // Loop over the table rows
                  page.map((row, i) => {
                    // Prepare the row for display
                    prepareRow(row);
                    return (
                      // Apply the row props
                      <div
                        {...row.getRowProps()}
                        key={row.id}
                        className={styles.tr}
                      >
                        {row.cells.map((cell, key) => {
                          // Apply the cell props
                          return (
                            <div
                              {...cell.getCellProps()}
                              key={row.id}
                              className={styles.td}
                            >
                              {
                                // Render the cell contents
                                cell.render("Cell")
                              }
                            </div>
                          );
                        })}
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="pagination mt-8 mb-12 flex justify-between items-center">
            <div className="">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>{" "}
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </button>{" "}
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {">"}
              </button>{" "}
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>{" "}
              <span className="ml-4">
                Page{" "}
                <strong>
                  {state.pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
            </div>
            <div className="ml-4">
              <select
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
                className="border border-indigo-900 pl-4 py-2 rounded w-full"
              >
                {[5, 20, 50, 100].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
