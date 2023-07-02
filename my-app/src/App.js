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
  Loader,
} from "./Components";
import { Explore, Home, SinglePostPage } from "./Pages";
import "./App.css";
import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./Components/Toast/Toast";
import { useAuth } from "./Contexts/AuthContext";
import { EditPost } from "./Components/EditPost/EditPost";
import { usePost } from "./Contexts/PostContext";

function App() {
  const { toast, hideToastBar } = useToast();
  const { isLoading } = usePost();
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
          path="/users"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        ></Route>
        <Route path="/posts/:postId" element={<SinglePostPage />}></Route>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <>
              <Explore />
            </>
          }
        ></Route>
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        ></Route>
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
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
