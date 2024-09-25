import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Root from "./pages/Root";
import RatePage from "./pages/Rate";
import LoginPage, { action as loginAction } from "./pages/Login";

import { Provider } from "react-redux";
import store from "../store/index";
import RootDashboard from "./pages/RootDashboard";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "rate", element: <RatePage /> },
      { path: "login", element: <LoginPage />, action: loginAction },
    ],
  },
  {
    path: "/:accountID/dashboard",
    element: <RootDashboard />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}
