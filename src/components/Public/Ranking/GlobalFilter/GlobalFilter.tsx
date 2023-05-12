import { useState } from "react";
import { useAsyncDebounce } from "react-table";

import "regenerator-runtime";

// Define a default UI for filtering
export default function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="w-full mr-2 md:w-1/2 max-w-xl">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search between ${count} projects`}
        className="w-full bg-transparent py-3 px-5 border-2 border-indigo-900 text-md font-bold text-black placeholder-indigo-900 outline-none rounded-lg"
      />
    </div>
  );
}
