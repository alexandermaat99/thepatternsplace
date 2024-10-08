import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUpPage, ErrorPage } from "./routes/index.ts";

const router = createBrowserRouter([
  { path: "/", element: <SignUpPage />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
