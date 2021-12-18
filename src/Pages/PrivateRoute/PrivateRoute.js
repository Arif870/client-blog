import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Spinner animation="border" role="status"></Spinner>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
