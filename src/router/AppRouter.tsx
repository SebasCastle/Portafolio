
import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { PortafolioLayout } from "@/HomePage/layouts/PortafolioLayout";
import { HomePage } from "@/HomePage/Me";
import { Page404 } from "@/HomePage/Pages/Page404";
import { GiftApp } from "@/HomePage/Pages/gifts/GiftsApp";

const ScrambleWords = lazy(
  () => import("@/HomePage/Pages/ScrabbleGame")
);

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Navigate to="/Home" replace />} />

        {/* Portfolio */}
        <Route element={<PortafolioLayout />}>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/ScrambleGame" element={<ScrambleWords />} />
          <Route path="/giftsApp" element={<GiftApp />} />

        </Route>

        {/* 404 */}
        <Route path="/404" element={<Page404 />} />

        {/* Cualquier ruta inexistente */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
};