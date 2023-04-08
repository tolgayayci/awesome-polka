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
    <div className="w-full">
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search between ${count} articles`}
        className="w-full py-3 px-5 border-2 bg-white border-indigo-900 text-md font-bold text-black placeholder-indigo-900 outline-none rounded-lg"
      />
    </div>
  );
}
