import { createBrowserRouter } from "react-router-dom";
import { Root } from "../src/Root/Root";
import { Home } from "./Pages/Home/Home";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";
import { Blogs } from "./Pages/Blogs/Blogs";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
