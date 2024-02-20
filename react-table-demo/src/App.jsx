import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Basic_table } from "./components/Basic_table";
import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { RowSelection } from "./components/RowSelection";
import { ColumnOrder } from "./components/ColumnOrder";
import { ColumnHiding } from "./components/ColumnHiding";
import { StickyTable } from "./components/StickyTable";

function App() {
  return (
    <>
      <StickyTable />
    </>
  );
}

export default App;
