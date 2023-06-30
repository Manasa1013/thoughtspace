import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
export function Login() {
  const { auth, setAuth, loginHandler, loginField, setLoginField } = useAuth();
  const { toast, showToastBar, hideToastBar } = useToast();
  const [loginErrorField, setLoginErrorField] = useState({
    userNameError: "",
    passwordError: "",
  });

  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const nameRegexPattern = new RegExp(
    "^(?=.{5,14}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
  );
  const passwordRegexPattern = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$",
    "i"
  );
  // const url = "http://localhost:8080";

  const [validFieldID] = useState("");
  // const navigate = useNavigate();
  // const location = useLocation();

  function validateFields(
    regexPattern,
    fieldName,
    errorName,
    errorText,
    errorField,
    setErrorField
  ) {
    let errorFieldName = Object.keys(errorField).find(
      (item) => item === errorName
    );
    if (regexPattern.test(fieldName)) {
      // console.log("pattern matched", errorFieldName);
      setErrorField((prev) => {
        return { ...prev, [errorFieldName]: "" };
      });
    } else {
      // console.log("pattern not matched", errorFieldName);
      setErrorField((prev) => {
        // console.log(errorName, errorText, "printing at line 34");
        return { ...prev, [errorFieldName]: errorText };
      });
    }
  }
  async function loginSubmitHandler() {
    try {
      if (
        loginErrorField.userNameError.length > 0 ||
        loginErrorField.passwordError.length > 0
      ) {
        showToastBar("Please enter valid credentials");
      } else if (
        loginField.username.length <= 0 ||
        loginField.password.length <= 0
      ) {
        showToastBar("Please enter credentials to log in");
        return;
      } else {
        let user = loginField;
        let res = await loginHandler(user);
        if (res.status === 200) {
          console.log(res, "at login component");
          showToastBar("Successfully logged in");
          resetLoginValues();
        }
      }
    } catch (err) {
      console.error(err, "error while logging in");
    }
    // return validFieldID;
  }

  function resetLoginValues() {
    setLoginField((prev) => ({
      ...prev,
      username: "",
      password: "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("login");
    loginSubmitHandler();
  }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-teal-700">
            Log in
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                htmlFor="user-name"
                className="text-gray-900 block pr-3 py-4"
              >
                User Name
              </label>
              <input
                id="user-name"
                name="user-name"
                type="text"
                value={loginField.username}
                autoComplete="userName"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="James_Cameron"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setLoginField((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }));
                }}
                onBlur={(e) => {
                  // console.log("the username field lost focus");
                  let errorAlertMessage =
                    "Must have atleast 5-14 characters and includes only .,_";
                  validateFields(
                    nameRegexPattern,
                    loginField.username,
                    "userNameError",
                    errorAlertMessage,
                    loginErrorField,
                    setLoginErrorField
                  );
                }}
              />

              <p className="text-sm text-pink-600">
                {loginErrorField.userNameError}
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-900 block pr-3 pb-3 pt-3"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showLoginPassword ? "text" : "password"}
                value={loginField.password}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="theWay^OfWater2"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setLoginField((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                }}
                onBlur={(e) => {
                  // console.log("the username field lost focus");
                  let errorAlertMessage =
                    "Must have 8 to 18 characters with one capital and one special character";
                  validateFields(
                    passwordRegexPattern,
                    loginField.password,
                    "passwordError",
                    errorAlertMessage,
                    loginErrorField,
                    setLoginErrorField
                  );
                }}
              />
              <p className="text-sm text-pink-600">
                {loginErrorField.passwordError}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="show-password"
                name="show-password"
                type="checkbox"
                onChange={() => setShowLoginPassword((prev) => !prev)}
                className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
              />
              <label
                htmlFor="show-password"
                className="ml-2 block text-sm text-gray-900"
              >
                Show password
              </label>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600/100 py-2 px-4 text-sm font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              onClick={(e) => {
                setLoginField((prev) => ({
                  ...prev,
                  username: "Taylor_Swift",
                  password: "Taylor@1",
                }));
                handleSubmit(e);
              }}
            >
              Log in as Guest
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600/100 py-2 px-4 text-sm font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
        </form>
        <div
          style={{ margin: "0.5rem 0.25rem" }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center ">
            <p className="text-gray-700 text-sm">Don't have an account?</p>
            <Link className="text-teal-700 font-medium pl-2" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
