import React from "react";
import { useMatchMedia } from "./hooks/useMatchMedia";
import { PageWrapper } from "./Components/Other/PageWrapper";

import { Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage.jsx";
import { Layout } from "./Components/Other/Layout";
import { Dokumente } from "./Components/Header/Dokumente/Dokumente";

export default function App() {
  const { isMobile } = useMatchMedia();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isMobile={isMobile} />}>
          <Route index element={<MainPage />} />
          <Route path="dokumente" element={<Dokumente />} />
          <Route path="dokumente/:id" element={<PageWrapper />} />
        </Route>
      </Routes>
    </>
  );
}