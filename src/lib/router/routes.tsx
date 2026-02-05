import Home from "lib/pages/home";
import Snapshot from "lib/pages/snapshot";
import type { PathRouteProps } from "react-router-dom";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/snapshot",
    element: <Snapshot />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
