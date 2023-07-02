import { useEffect } from "react";
import { Routes, Route } from "react-router";

import {
  Login,
  Signup,
  RequireAuth,
  NewPost,
  PostList,
  UserProfile,
  PostDetails,
} from "./Components";
import { Home } from "./Pages";
import "./App.css";
import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./Components/Toast/Toast";
import { useAuth } from "./Contexts/AuthContext";
import { EditPost } from "./Components/EditPost/EditPost";

function App() {
  const { toast, hideToastBar } = useToast();
  const { auth } = useAuth();
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
        <Route
          path="/login"
          element={auth.token ? <Home /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={auth.token ? <Home /> : <Signup />}
        ></Route>
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
        <Route path="/posts/:postId" element={<PostDetails />}></Route>
        <Route
          path="*"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
