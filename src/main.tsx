import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { RoutedBody } from "./components/WebsiteLayout";
import Home from "./pages/Home";
import Error404Page from "./pages/Error404Page";
import BioOffshoreWind from "./pages/projects/BioOffshoreWind";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RoutedBody />,
      errorElement: <Error404Page></Error404Page>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "offshore-wind",
          element: <BioOffshoreWind />,
        },
      ],
    },
  ],
  { basename: "/bio-website" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
