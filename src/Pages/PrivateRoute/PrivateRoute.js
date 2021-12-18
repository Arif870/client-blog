import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const Navigate = useNavigate();

  if (isLoading) {
    return <Spinner animation="border" role="status"></Spinner>;
  }
  return (
    <React.Fragment
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Navigate
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
