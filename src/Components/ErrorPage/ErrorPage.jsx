import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};
