import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";
import CheckoutForm from "./components/CheckoutForm";
import Cart from "./components/Cart";
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
        path: "cart",
        element: <Cart />,
      },

      {
        path: "checkout",
        element: <CheckoutForm />,
      },
    ],
  },
]);
