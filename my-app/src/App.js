import { useEffect } from "react";
import { Routes, Route } from "react-router";

import {
  Login,
  Signup,
  RequireAuth,
  NewPost,
  PostList,
  UserProfile,
} from "./Components";
import { Home } from "./Pages";
import "./App.css";
import { useToast } from "./Contexts/ToastContext";

function App() {
  const { toast, hideToastBar } = useToast();
  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
        // setIsLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToastBar]);

  return (
    <div className="App bg-gray-100">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/posts"
          element={
            <>
              <NewPost />
              <PostList />
            </>
          }
        ></Route>
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
