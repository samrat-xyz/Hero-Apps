import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import AppDetails from "../pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader:()=> fetch('/TreandingApp.json'),
        Component: Home,
      },
      {
        path: "/apps",
        loader:()=>fetch('/AppData.json'),
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path:"/app-details/:id",
        loader:()=>fetch('/AppData.json'),
        Component:AppDetails
      }
    ],
  },
]);
