import React from "react";
import { useMemo } from "react";
import { useFilters, useGlobalFilter, useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { GROUPED_COLUMNS } from "./coloumns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFiltering } from "./ColumnFiltering";

export const FilteringTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const dataa = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFiltering,
    };
  }, []);
  const tableInstance = useTable(
    {
      columns,
      data: dataa,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );
  //   console.log(tableInstance);
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    footerGroups,
    state,
    setGlobalFilter,
    rows,
    prepareRow,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
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
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterGroupProps}>
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
