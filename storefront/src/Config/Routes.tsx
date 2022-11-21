import App from "../App";
import {
  ErrorPage,
  Homepage,
  Product,
  Storefront,
  Contact,
} from "../Containers";

const ROUTES = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/store",
        element: <Storefront />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
    ],
  },
];

export default ROUTES;
