import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { json, useLocation, useNavigate } from "react-router";

import { useToast } from "./ToastContext";
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") ?? "",
    user: {
      firstName: JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))?.firstName
        : "",
      lastName: JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))?.lastName
        : "",
      username: JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))?.username
        : "",
    },
  });
  const [field, setField] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [loginField, setLoginField] = useState({
    username: "",
    password: "",
  });
  const { showToastBar } = useToast();

  async function logoutHandler() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setAuth(() => ({
        token: "",
        user: {},
      }));
      showToastBar("Logged out successfully");
      navigate("/");
    } catch (err) {
      console.error(err, "while logging out error");
    }
  }
  async function loginHandler(user) {
    try {
      // setIsLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log({ response }, { data });
      if (response.status === 200) {
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.foundUser));

        setAuth((prev) => ({
          ...prev,
          token: data.encodedToken,
          user: {
            ...prev.user,
            firstName: data.foundUser.firstName,
            lastName: data.foundUser.lastName,
            username: data.foundUser.username,
          },
        }));
        console.log({ location });
        navigate(location?.state ? location?.state?.from?.pathname : "/", {
          replace: true,
        });
        return response;
      }
      if (response.status !== 200) {
        console.error(response);
      }
    } catch (err) {
      console.error(err, "error while logging in");
      showToastBar("Error in logging in at authcontext");
      return err;
    } finally {
      // setIsLoading(false);
    }
  }

  async function signupHandler() {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(field),
      });
      const data = await response.json();
      console.log({ data }, "at signup");

      if (response.status === 201) {
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("user", JSON.stringify(data.createdUser));
        showToastBar(`Successfully signed up ${data.createdUser.firstName}`);
        setAuth((prev) => ({
          ...prev,
          token: data.encodedToken,
          user: {
            ...prev.user,
            firstName: data.createdUser.firstName,
            lastName: data.createdUser.lastName,
            username: data.createdUser.username,
          },
        }));
        console.log({ location });

        navigate(location?.state ? location?.state?.from?.pathname : "/", {
          replace: true,
        });
        return response;
      } else {
        console.log("failure", response);
      }
    } catch (err) {
      showToastBar("Error in signing up");
      console.error(err, "at catch of signupHandler");
    }
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loginHandler,
        logoutHandler,
        loginField,
        setLoginField,
        field,
        setField,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
