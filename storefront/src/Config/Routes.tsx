import App from "../App";
import { ErrorPage } from "../Containers";

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
        element: <div>storefront</div>,
      },
      {
        path: "/contact",
        element: <div>contact info</div>,
      },
    ],
  },
];

export default ROUTES;
