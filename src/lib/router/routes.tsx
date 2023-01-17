import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import Reading from "lib/pages/reading";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reading",
    element: <Reading />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
