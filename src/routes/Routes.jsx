import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import AppNotFound from "../ErrorPage/AppNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/TreandingApp.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/AppData.json"),

        Component: Apps,
      },
      {
        path: "/installation",
        loader:()=>fetch('/AppData.json'),
        Component: Installation,
      },
      {
        path: "/app-details/:id",
        loader: () => fetch("/AppData.json"),
        errorElement: <AppNotFound />,
        Component: AppDetails,
      },
    ],
  },
]);
