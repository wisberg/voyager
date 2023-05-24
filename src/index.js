import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
