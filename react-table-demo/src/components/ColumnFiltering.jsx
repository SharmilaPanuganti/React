import React from "react";

export const ColumnFiltering = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      search:{""}
      <input
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
