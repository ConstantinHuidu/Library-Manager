import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { ErrorPage } from "../pages/ErrorPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<div>Books dashboard</div>} />
        <Route path="/view" element={<div>View a book</div>} />
        <Route path="/edit/:id" element={<div>Edit a book</div>} />
        <Route path="/add" element={<div>Add a book</div>} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
