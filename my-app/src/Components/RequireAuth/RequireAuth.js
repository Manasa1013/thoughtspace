import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../Contexts/AuthContext";

export function RequireAuth({ children }) {
  const { auth } = useAuth();
  const location = useLocation();
  // if (auth.token) console.log(location, auth.token);
  return auth.token ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
