import { Routes, Route } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { ErrorPage } from "../pages/ErrorPage";
import { Suspense, lazy } from "react";

const Loadable =
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );

const DahsboardPage = Loadable(lazy(() => import("../pages/BooksDahsboard")));
const AddBookPage = Loadable(lazy(() => import("../pages/AddNewBook")));
const EditBookPage = Loadable(lazy(() => import("../pages/EditBook")));
const ViewBookPage = Loadable(lazy(() => import("../pages/ViewBook")));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<DahsboardPage />} />
        <Route path="/view/:id" element={<ViewBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
