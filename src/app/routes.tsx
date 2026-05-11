import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/project/:projectId",
    Component: ProjectDetail,
  },
  {
    path: "/about",
    Component: About,
  },
]);