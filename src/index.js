import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Fav from "./Fav";
import Details from "./About/Details"; // ✅ استدعاء الديتيلز

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Favorites",
    element: <Fav />,
  },
  {
    path: "details/:id", // ✅ مسار الديتيلز
    element: <Details />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
