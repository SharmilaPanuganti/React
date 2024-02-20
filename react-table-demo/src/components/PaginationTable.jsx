import React from "react";
import { useMemo } from "react";
import { usePagination, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { GROUPED_COLUMNS } from "./coloumns";
import "./table.css";

export const PaginationTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const dataa = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable(
    {
      columns,
      data: dataa,
    },
    usePagination
  );
  console.log(tableInstance);
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,

    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <span>
        Page{""}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
        {""}
      </span>
      <span>
        go to page:{""}
        <input
          type="number"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(pageNumber);
          }}
          style={{ width: "50px" }}
        />
      </span>
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 25, 50].map((pagesize) => (
          <option value={pagesize}> show {pagesize}</option>
        ))}
      </select>

      <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
        {"<<<"}
      </button>
      <div>
        <button disabled={!canPreviousPage} onClick={() => previousPage()}>
          previous
        </button>
        <button disabled={!canNextPage} onClick={() => nextPage()}>
          next
        </button>
        <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>
          {">>"}
        </button>
      </div>
    </>
  );
};
