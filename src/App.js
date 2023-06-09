import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "../src/components/Header.js";
import Home from "../src/components/Home.js";
import SearchWeb from "../src/components/SearchWeb.js";
import SearchImages from "../src/components/SearchImages.js";
import SearchNews from "../src/components/SearchNews.js";
import Footer from "../src/components/Footer.js";
import About from "../src/components/About.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? null : <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="search-web/:query" element={<SearchWeb />} />
        <Route path="search-images/:query" element={<SearchImages />} />
        <Route path="search-news/:query" element={<SearchNews />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
