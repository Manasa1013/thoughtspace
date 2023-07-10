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
import {
  Bookmarks,
  Explore,
  Home,
  NotFound,
  Profile,
  SinglePostPage,
} from "./Pages";
import "./App.css";
import { useToast } from "./Contexts/ToastContext";
import { Toast } from "./Components/Toast/Toast";
import { useAuth } from "./Contexts/AuthContext";

function App() {
  const { toast, hideToastBar } = useToast();
  const { auth } = useAuth();
  useEffect(() => {
    let timer = setTimeout(() => {
      if (toast.isVisible === "show") {
        hideToastBar();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast, hideToastBar]);
  console.clear();
  return (
    <div className="App">
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
          path="/posts/:postId"
          element={
            <>
              <RequireAuth>
                <SinglePostPage />
              </RequireAuth>
            </>
          }
        ></Route>
        <Route
          path="/"
          element={
            <>
              <RequireAuth>
                <Home />
              </RequireAuth>
            </>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <>
              <RequireAuth>
                <Explore />
              </RequireAuth>
            </>
          }
        ></Route>
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <Bookmarks />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/users/:username"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="*"
          element={
            <>
              <NotFound />
            </>
          }
        ></Route>
      </Routes>
      <Toast />
    </div>
  );
}

export default App;
