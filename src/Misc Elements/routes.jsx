import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ErrorRoute from "./ErrorRoute";

const routes = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
];

export default routes;
