import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const navStyling = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navStyling}>
        Home
      </NavLink>
      <NavLink to="/about" style={navStyling}>
        about us
      </NavLink>
      <NavLink to="/products" style={navStyling}>
        products
      </NavLink>
    </nav>
  );
};
