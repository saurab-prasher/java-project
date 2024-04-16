import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import CheckoutForm from "./components/CheckoutForm";
import OrderList from "./components/OrderList";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "products",
        element: <ProductList />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "orders",
        element: <OrderList />,
      },
      {
        path: "checkout",
        element: <CheckoutForm />,
      },
    ],
  },
]);
