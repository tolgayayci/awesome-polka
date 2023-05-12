// ** Next Imports
import Image from "next/image";
import { useMemo, useEffect, useState } from "react";

// ** Table Components
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";
import GlobalFilter from "../GlobalFilter/GlobalFilter";

// ** Style Imports
import styles from "./Table.module.scss";

// ** Custom Components
import { SelectColumnFilter } from "../SelectColumnFilter/SelectColumnFilter";

const fetchInfo = async () => {
  const projects = [
    "flow",
    "bitcoin",
    "ethereum",
    "polkadot",
    "fantom",
    "aave",
    "chainlink",
    "uniswap",
    "sushi",
    "the-graph",
  ];

  const obj: any = [];

  await Promise.all(
    projects.map(async (project) => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${project}/`
      );

      const data = await response.json();

      if (data) {
        const temp = {
          id: data.id,
          project: {
            name: data.name,
            link: data.links.homepage[0],
            image: data.image.large,
            category: data.categories[0],
          },
          price: data.market_data.current_price.usd,
          priceChange: data.market_data.price_change_percentage_24h,
          marketCap: data.market_data.market_cap.usd,
          vote: data.coingecko_score,
          category: data.categories[0],
        };

        obj.push(temp);
        console.log(obj);
      } else {
        console.log("error");
      }
    })
  );

  return obj;
};

export default function Table() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchInfo().then((res) => {
      setInfo(res);
    });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "project.name",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <div className="w-1/3 flex justify-start">
                  <Image
                    src={row.original.project.image}
                    alt="Next.js Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <div className="w-2/3 -ml-4">
                  <span className="text-lg font-bold">
                    {row.original.project.name}
                  </span>
                </div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <span className="font-semibold">
                  {" "}
                  ${row.original.price.toFixed(2)}
                </span>
              </div>
            </>
          );
        },
      },
      {
        Header: "Price Change",
        accessor: "priceChange",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <span
                  className={`inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm ${
                    row.original.priceChange > 0 ? "bg-green-200" : "bg-red-200"
                  }`}
                >
                  {row.original.priceChange.toFixed(2)}%
                </span>
              </div>
            </>
          );
        },
      },
      {
        Header: "Market Cap",
        accessor: "marketCap",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <span className="font-semibold">
                  {" "}
                  ${row.original.marketCap.toLocaleString()}
                </span>
              </div>
            </>
          );
        },
      },
      {
        Header: "Score",
        accessor: "vote",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-blue-200 uppercase shadow-sm">
                  {row.original.vote.toFixed(3)}
                </span>
              </div>
            </>
          );
        },
      },
      {
        Header: "Category",
        accessor: "category",
        Filter: SelectColumnFilter,
        filter: "includes",
        Cell: ({ row }: any) => {
          return (
            <>
              <div className="flex items-center">
                <span className="inline-flex mr-3 h-6 items-center justify-center text-xs font-extrabold px-3 text-indigo-900 rounded border-2 border-indigo-900 bg-orange-200 uppercase shadow-sm">
                  {row.original.category}
                </span>
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
    <section className="relative container mx-auto scroll-smooth max-w-8xl my-20 px-6 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-between mb-10 -mt-4">
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
                            : " - "}
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

        {/* <div className="flex justify-end">
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
        </div> */}
      </div>
    </section>
  );
}
