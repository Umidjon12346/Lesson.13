import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import User from "../pages/Users";
import SignIn from "../pages/auth/SignIn";
import Index from "../pages/Index";
import Products from "../pages/Products";
import Posts from "../pages/Post";
import Students from "../pages/Students";
import SignIn1 from "../pages/auth/SignIn1";
import Head from "../pages/language/Head";

function Router() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn1 />} />

        <Route path="api" element={<Index />}>
          <Route path="users" element={<User />} />
          <Route path="head" element={<Head />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={route} />;
}

export default Router;
