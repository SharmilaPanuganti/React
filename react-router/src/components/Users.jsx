import React from "react";
import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveParams = searchParams.get("filter") === "active";
  return (
    <div>
      Users are :
      <h2>
        <Link to="1">user1</Link>
      </h2>
      <h2>
        <Link to="2">user2</Link>
      </h2>
      <h2>
        <Link to="3">user3</Link>
      </h2>
      <h2>
        <Link to="admin">admin</Link>
      </h2>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        active users
      </button>
      <button onClick={() => setSearchParams({})}>reset users</button>
      {showActiveParams ? (
        <h2>showing all active users</h2>
      ) : (
        <h2>showing users</h2>
      )}
    </div>
  );
};
