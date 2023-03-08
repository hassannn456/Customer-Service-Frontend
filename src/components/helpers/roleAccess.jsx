import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../auth-context/auth-context";

const Auth = ({ allowedRoles }) => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  return allowedRoles.find((role) => auth.userRole?.toLowerCase().includes(role)) ? (
    <Outlet />
  ) : (
    <Navigate to={'/'} state={{ from: location }} replace/>
  );
};

export default Auth;