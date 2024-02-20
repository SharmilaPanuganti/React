import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";

import { NavBar } from "./components/NavBar";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import { FeaturedProd } from "./components/FeaturedProd";
import { LatestProd } from "./components/LatestProd";
import { PageNotFound } from "./components/PageNotFound";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";

const Lazyy = React.lazy(() => import("./components/About"));
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <Lazyy />
            </React.Suspense>
          }
        />
        <Route path="orderConfirmation" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProd />} />
          <Route path="featured" element={<FeaturedProd />} />
          <Route path="latest" element={<LatestProd />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path="admin" element={<Admin />} />
          <Route path=":userid" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
