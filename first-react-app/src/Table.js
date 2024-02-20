import React, { Fragment } from "react";
import Coloumns from "./Coloumns";
export default function Table() {
  const items = ["a", "b", "c"];
  return (
    // <table>
    //   <tbody>
    //     <tr>
    //       <Coloumns />
    //     </tr>
    //   </tbody>
    // </table>
    <Fragment>
      {items.map((items, index) => (
        <Fragment key={index}>{items}</Fragment>
      ))}
    </Fragment>
  );
}
