import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "../src/components/Header.js";
import Home from "../src/components/Home.js";
import SearchWeb from "../src/components/SearchWeb.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<SearchWeb />} />} />
        <Route index element={<Home />} />
        <Route path="/web" element={<SearchWeb />} />
      </Routes>
    </BrowserRouter>
  );
};

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" ? <Header /> : null}
      <div>{children}</div>
    </div>
  );
};

export default App;
