import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const handleClick = (e) => {
    if (e.target.checked === true) {
      setTheme("sunset");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.getElementById("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="flex justify-between ">
      <NavLink className="font-bold text-2xl text-primary" to="/">
        <span className="text-[#FF00D3]">Byte</span>Blaze
      </NavLink>
      <div className="space-x-6 flex items-center *:font-bold">
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
        <input onClick={handleClick} type="checkbox" className="toggle" />
      </div>
    </div>
  );
};
