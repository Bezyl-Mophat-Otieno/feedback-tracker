import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import SafeArea from "./pages/SafeArea";
import userStore from "./zustand/userStore";
import { useEffect, useState } from "react";

const Root = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(userStore.getState().user.isAuthenticated);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home setIsAuth={setIsAuth} />}></Route>
        <Route
          path="/login"
          element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        ></Route>
        <Route
          path="/admin"
          element={
            isAuth ? (
              <Dashboard setIsAuth={setIsAuth} />
            ) : (
              <SafeArea setIsAuth={setIsAuth} />
            )
          }
        ></Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
