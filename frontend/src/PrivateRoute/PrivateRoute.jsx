import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, lodaing } = useAuth();
  console.log(user?.email);
  if (lodaing) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
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
