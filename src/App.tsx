import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard, { dataLoader } from "./pages/Dashboard";
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

const isAuth = userStore.getState().user.isAuthenticated;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/safe" element={<SafeArea />}></Route>
      <Route
        path="/admin"
        loader={dataLoader}
        element={isAuth ? <Dashboard /> : <SafeArea />}
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
