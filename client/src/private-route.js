import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

const PrivateRoute = ({ component: Component, username: username, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} username={username} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;