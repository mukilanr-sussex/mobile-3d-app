import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Page from "./components/Page";
import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import AboutPage from "./pages/AboutPage";
import GoingBeyondPage from "./pages/GoingBeyondPage";
import ScrollToTop from "./components/scrollToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

const baseRoute = "/~mr754/3dapp/assignment";

const App = () => {
  return (
    <Page>
      {/* <BrowserRouter basename={baseRoute}> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/3d-models" element={<ModelsPage />} />
          <Route path="/going-beyond" element={<GoingBeyondPage />} />
        </Routes>
      </BrowserRouter>
    </Page>
  );
};

export default App;
