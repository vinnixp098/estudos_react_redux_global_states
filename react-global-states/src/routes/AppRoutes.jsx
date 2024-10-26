import { PageInit } from "components/PageInit/PageInit";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInit />}>
          <Route index element={<div>home</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
