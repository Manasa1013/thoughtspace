import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

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
      email: JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))?.email
        : "",

    },
  });
  const [field, setField] = useState({
    firstName: "James",
    lastName: "Cameron",
    username: "James_Cameron",
    password: "James@123",
    confirmPassword: "James@123",
    email: "james@gmail.com",
    bio: "Hey All! Let's connect and share our thoughts!",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp",
    website: "https://manasamandalreddy.netlify.app/",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginField, setLoginField] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { showToastBar } = useToast();

  async function logoutHandler() {
    try {
      setIsLoading(() => true);
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
    } finally {
      setIsLoading(() => false);
    }
  }
  async function loginHandler(user) {
    try {
      setIsLoading(true);
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
            email: data.foundUser.email,
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
      setIsLoading(false);
    }
  }

  async function signupHandler() {
    try {
      setIsLoading(() => true);
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
            email: data.createdUser.email,
            bio: data.createdUser.bio,
            avatarUrl: data.createdUser.avatarUrl,
            website: data.createdUser.website,
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
    } finally {
      setIsLoading(() => false);
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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
