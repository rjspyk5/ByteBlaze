import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../../Pages/Home/Home";

export const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};
