import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  if (!isRouteErrorResponse(error)) {
    return <div>Unknown error</div>;
  }

  return (
    <div className="text-center text-red-700">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{/* <i>{error.statusText || error.error?.message}</i> */}</p>
    </div>
  );
};
