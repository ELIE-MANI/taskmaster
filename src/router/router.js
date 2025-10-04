import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";

const router = createBrowserRouter([

  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/create",
    Component: CreatePage,
  },

])

export default router;