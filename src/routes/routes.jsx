import { createBrowserRouter } from "react-router";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:
  },
]);

export default routes;
