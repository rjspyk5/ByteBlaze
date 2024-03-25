import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between ">
      <NavLink className="font-bold text-2xl" to="/">
        ByteBlaze
      </NavLink>
      <div className="space-x-6 *:font-bold">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Bookmarks
        </NavLink>
      </div>
    </div>
  );
};
