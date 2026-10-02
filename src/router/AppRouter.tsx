import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { PortafolioLayout } from "@/HomePage/layouts/PortafolioLayout";
import { HomePage } from "@/HomePage/Me";
import { Page404 } from "@/HomePage/Pages/Page404";

const ScrambleWords = lazy(() => import("@/HomePage/Pages/ScrabbleGame"));
const GiftApp = lazy(() =>
  import("@/HomePage/Pages/gifts/GiftsApp").then((m) => ({ default: m.GiftApp }))
);

function RouteFallback() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center text-muted-foreground text-sm"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />

          <Route element={<PortafolioLayout />}>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/ScrambleGame" element={<ScrambleWords />} />
            <Route path="/giftsApp" element={<GiftApp />} />
          </Route>

          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
