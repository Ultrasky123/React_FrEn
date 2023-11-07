import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layouts/1st-home";
import Student from "./components/Layouts/team-student";
import Instructor from "./components/Layouts/team-instructor";
import App2 from "./components/testing/App2";
import Mylivescreen from "./pages/Livescreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/instructor",
    element: <Instructor />,
  },
  {
    path: "/livescreen",
    element: <Mylivescreen />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
