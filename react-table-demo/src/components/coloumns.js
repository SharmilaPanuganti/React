import { format } from "date-fns";
// import { ColumnFiltering } from "./ColumnFiltering";

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    sticky: "left",

    // disableFilters: true,
  },
  // {
  //   Header: "name",
  //   Footer: "name",

  //   columns: [
  //     {
  //       Header: "First name",
  //       Footer: "First name",
  //       accessor: "first_name",
  //     },
  //     {
  //       Header: "last name",
  //       Footer: "last name",
  //       accessor: "last_name",
  //     },
  //   ],
  // },
  // {
  //   Header: "info",
  //   Footer: "info",

  //   columns: [
  //     {
  //       Header: "DOB",
  //       Footer: "DOB",
  //       accessor: "date_of_birth",

  //       Cell: ({ value }) => {
  //         return format(new Date(value), "dd/MM/yyyy");
  //       },
  //     },
  //     {
  //       Header: "COUNTRY",
  //       Footer: "COUNTRY",
  //       accessor: "country",
  //     },
  //     {
  //       Header: "PHONE",
  //       Footer: "PHONE",
  //       accessor: "phone",
  //     },
  //   ],
  // },
  {
    Header: "email",
    Footer: "email",
    accessor: "email",
  },
  {
    Header: "age",
    Footer: "age",
    accessor: "age",
  },
];
