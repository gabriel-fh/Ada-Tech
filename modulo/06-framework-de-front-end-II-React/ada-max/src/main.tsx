import "./styles/reset.css";
import "./styles/main.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Backstage } from "./modules/backstage";
import { Home } from "./modules/home";
import { Login } from "./modules/login";
import { Profile } from "./modules/profile";
import { ProtectedRoute } from "./components/ProtectedRoute";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role="user">
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute role="user">
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/backstage",
    element: (
      <ProtectedRoute role="admin">
        <Backstage />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
