import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchusers } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const UserView = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchusers());
  }, []);
  return (
    <div>
      <h2>list of users</h2>
      {user.loading && <div>Loading..</div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li key={user.id}> {user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
