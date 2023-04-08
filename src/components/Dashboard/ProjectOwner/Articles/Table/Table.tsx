// ** Next Imports
import Link from "next/link";
import { useMemo, useEffect, useState } from "react";

// ** Table Components
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
  UseRowStateCellProps,
} from "react-table";

import GlobalFilter from "./GlobalFilter/GlobalFilter";

// ** Style Imports
import styles from "./Table.module.scss";

import type { Article, ModelArticleConnection } from "../../../../../API";

export default function Table(props: { articles: ModelArticleConnection }) {
  const [info, setInfo] = useState(Array<Article | null>);

  useEffect(() => {
    console.log(props.articles?.items);
    setInfo(props.articles?.items);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <div className="w-full">
                  <span className="text-md font-semibold text-black">
                    {row.original.title}
                  </span>
                </div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Last Updated",
        accessor: "updatedAt",
        Cell: ({ row }: any) => {
          const date = new Date(row.original.updatedAt);

          return (
            <>
              <div className="flex items-center">
                <span className="bg-green-100 text-green-800 text-xs mr-2 px-2.5 py-1 rounded border-2 border-green-900 font-bold">
                  {date.toLocaleString()}
                </span>
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
                <Link href={`/dashboard/articles/${row.original.id}`}>
                  <div className="text-xs font-semibold text-indigo-700 border-indigo-600 border-2 px-2.5 py-1 rounded-lg">
                    Edit Article
                  </div>
                </Link>
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
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <section className="relative container mx-auto scroll-smooth max-w-8xl mb-20">
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
          <div className="pagination mt-8 flex justify-between items-center">
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
