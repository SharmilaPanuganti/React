import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userid } = useParams();

  return <div>details of user: {userid}</div>;
};
