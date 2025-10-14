import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Privacy } from "@/pages/Privacy";
import { Terms } from "@/pages/Terms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
]);
