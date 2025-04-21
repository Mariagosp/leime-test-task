import { Navigate, Route, Routes } from "react-router-dom";

import TablePage from "@/pages/table";
import ListPage from "./pages/list";
import { NotFoundPage } from "./pages/notFound";

function App() {
  return (
    <Routes>
      <Route element={<Navigate to='/table' />} path="/" />
      <Route element={<TablePage />} path="/table" />
      <Route element={<ListPage />} path="/list" />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
