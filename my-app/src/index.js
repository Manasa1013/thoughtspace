import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./Contexts/AuthContext";
import { ToastProvider } from "./Contexts/ToastContext";
import { PostProvider } from "./Contexts/PostContext";
import { UserProvider } from "./Contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <AuthProvider>
          <UserProvider>
            <PostProvider>
              <App />
            </PostProvider>
          </UserProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  </React.StrictMode>
);

// Call make Server
makeServer();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
