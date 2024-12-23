import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { rootRoute } from "./routes/__root";
import { homeRoute } from "./routes/home";
import { searchRoute } from "./routes/search";
import "./index.css";

rootRoute.addChildren([homeRoute, searchRoute]);

const router = createRouter({
  routeTree: rootRoute,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
