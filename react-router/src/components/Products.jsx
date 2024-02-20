import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <div>
      <input type="search" placeholder="search.." />
      <nav>
        <Link to="featured">featured</Link>
        <Link to="latest">latest</Link>
      </nav>
      <Outlet />
    </div>
  );
};
