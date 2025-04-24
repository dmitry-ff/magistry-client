import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import { Poll } from "./pages/Poll.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [{ index: true, path: "/poll", Component: Poll }],
  },
]);
