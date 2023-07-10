import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";
import { useToast } from "../../Contexts/ToastContext";
import { validateFields } from "../../utils/CommonFunctions";
export const Signup = () => {
  const { setAuth, field, setField, signupHandler } = useAuth();
  const { showToastBar } = useToast();

  const [errorField, setErrorField] = useState({
    firstNameError: "",
    lastNameError: "",
    userNameError: "",
    passwordError: "",
    emailError: "",
    confirmPasswordError: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const nameRegexPattern = new RegExp(
    "^(?=.{5,14}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
  );
  const emailRegexPattern = new RegExp(
    "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$",
    "i"
  );
  const passwordRegexPattern = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$",
    "i"
  );
  // const url = "http://localhost:8080";

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    submitHandler();
  }
  async function submitHandler() {
    try {
      if (
        errorField.firstNameError.length > 0 ||
        errorField.lastNameError.length > 0 ||
        errorField.userNameError.length > 0 ||
        errorField.passwordError.length > 0 ||
        errorField.emailError.length > 0 ||
        errorField.confirmPasswordError.length > 0
      ) {
        showToastBar("Please correct errors at the fields");
        return;
      } else if (
        field.firstName.length <= 0 ||
        field.lastName.length <= 0 ||
        field.username.length <= 0 ||
        field.password.length <= 0 ||
        field.email.length <= 0 ||
        field.confirmPassword.length <= 0
      ) {
        showToastBar("Please enter details");
        return;
      } else {
        let user = field;
        let res = await signupHandler(user);
        console.log({ res });
        if (res.status === 201) {
          console.log(res, "at signup component");
          showToastBar("Successfully signed up");
          resetValues();
        }
      }
    } catch (err) {
      console.error(err, "at signing up");
      showToastBar("Error! Try signing up again");
    }
  }
  function resetValues() {
    setField((prev) => ({
      ...prev,
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      confirmPassword: "",
    }));
  }

  return (
    <div className="flex min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-1 text-center text-3xl font-bold tracking-tight text-teal-700">
            Sign up
          </h2>
        </div>
        <form className="mt-2 space-y-4" onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label
                htmlFor="first-name"
                className="text-gray-900 block pr-3 py-2 text-sm md:text-base"
              >
                First Name
              </label>
              <input
                id="first-name"
                name="first-name"
                value={field.firstName}
                type="text"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="James"
                onInput={(e) => {
                  // console.log(e.target.value, "firstName");
                  return setField((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }));
                }}
                onBlur={(e) => {
                  // console.log("the username field lost focus");
                  let errorAlertMessage =
                    "Must have atleast 5-14 characters and includes only .,_";
                  validateFields(
                    nameRegexPattern,
                    field.firstName,
                    "firstNameError",
                    errorAlertMessage,
                    errorField,
                    setErrorField
                  );
                }}
              />
              <p className="text-sm text-pink-600">
                {errorField.firstNameError}
              </p>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="text-gray-900 block pr-3 py-2 text-sm md:text-base"
              >
                Last Name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                value={field.lastName}
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="Cameron"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setField((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }));
                }}
                onBlur={(e) => {
                  // console.log("the username field lost focus");
                  let errorAlertMessage =
                    "Must have atleast 5-14 characters and includes only .,_";
                  validateFields(
                    nameRegexPattern,
                    field.lastName,
                    "lastNameError",
                    errorAlertMessage,
                    errorField,
                    setErrorField
                  );
                }}
              />
              <p className="text-sm text-pink-600">
                {errorField.lastNameError}
              </p>
            </div>

            <div>
              <label
                htmlFor="user-name"
                className="text-gray-900 block pr-3 py-2 md:text-base text-sm"
              >
                User Name
              </label>
              <input
                id="user-name"
                name="user-name"
                type="text"
                value={field.username}
                autoComplete="username"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="James_Cameron"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setField((prev) => ({
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
                    field.username,
                    "userNameError",
                    errorAlertMessage,
                    errorField,
                    setErrorField
                  );
                }}
              />
              <p className="text-sm text-pink-600">
                {errorField.userNameError}
              </p>
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-gray-900 block pr-3 py-2 md:text-base text-sm"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={field.email}
                autoComplete="Email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="james@gmail.com"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setField((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                }}
                onBlur={(e) => {
                  // console.log("the username field lost focus");
                  let errorAlertMessage = "Give proper email address";
                  validateFields(
                    emailRegexPattern,
                    field.email,
                    "emailError",
                    errorAlertMessage,
                    errorField,
                    setErrorField
                  );
                }}
              />
              <p className="text-sm text-pink-600">{errorField.emailError}</p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-gray-900 block pr-3 pb-2 pt-2 text-sm md:text-base"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={field.password}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="theWay^OfWater2"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setField((prev) => ({
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
                    field.password,
                    "passwordError",
                    errorAlertMessage,
                    errorField,
                    setErrorField
                  );
                }}
              />
              <p className="text-sm text-pink-600">
                {errorField.passwordError}
              </p>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="text-gray-900 block pr-3 pb-2 pt-2 text-sm md:text-base"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type={showPassword ? "text" : "password"}
                value={field.confirmPassword}
                autoComplete="confirm-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                placeholder="theWay^OfWater2"
                onInput={(e) => {
                  // console.log(e.target.value, "username");
                  return setField((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }));
                }}
                onBlur={(e) => {
                  // console.log("the username field lost focus");
                  let errorAlertMessage =
                    "Must match with the current password";
                  if (field.password === field.confirmPassword) {
                    setErrorField((prev) => ({
                      ...prev,
                      confirmPasswordError: "",
                    }));
                  } else {
                    setErrorField((prev) => ({
                      ...prev,
                      confirmPasswordError: errorAlertMessage,
                    }));
                  }
                }}
              />
              <p className="text-sm text-pink-600">
                {errorField.confirmPasswordError}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="show-password"
                name="show-password"
                type="checkbox"
                onChange={() => setShowPassword((prev) => !prev)}
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
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600/100 py-2 px-4 text-sm font-semibold text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>
        <div
          style={{ margin: "0.5rem 0.25rem" }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center ">
            <p className="text-gray-700 text-sm">Have an account already?</p>
            <Link className="text-teal-700 font-medium pl-2" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
