import { useMemo } from "react";
import { UseFiltersInstanceProps } from "react-table";

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id } = {} as any,
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...(options.values() as any)];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      className="border-2 border-indigo-900 px-5 py-[0.9rem] rounded-lg w-full bg-transparent text-md font-bold outline-none"
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
