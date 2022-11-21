import App from "../App";
import { ErrorPage, Storefront } from "../Containers";

const ROUTES = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>homepage with hero</div>,
      },
      {
        path: "/store",
        element: <Storefront />,
      },
      {
        path: "/contact",
        element: <div>contact info</div>,
      },
    ],
  },
];

export default ROUTES;
