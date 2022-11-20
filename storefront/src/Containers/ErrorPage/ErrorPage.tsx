import { ErrorResponse } from "@remix-run/router";
import { Link, useRouteError } from "react-router-dom";
import { Logo } from "../../Components";
import ERRORS, { DEFAULT_ERROR } from "../../Config/Errors";

const ErrorPage = () => {
  // this coercion feels flimsy, but it does seem that hook just returns unknown D:
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-300">
      <Logo width="200px" />
      <h1 className="my-20 font-serif text-5xl font-semibold text-violet-600">
        {ERRORS[error.status] ?? DEFAULT_ERROR}
      </h1>
      <Link to="/">
        <p className="text-lg font-semibold underline transition-all underline-offset-4 hover:opacity-50">
          Go back home
        </p>
      </Link>
    </div>
  );
};

export default ErrorPage;
