import { lazy } from "react";
import { Route } from "react-router-dom";

// Lazy load pages
const CompanyDetails = lazy(() => import("../pages/CompanyDetails.jsx"));
const CompaniesDirectory = lazy(() => import("../pages/CompaniesDirectory.jsx"));

// App routes
function AppRoutes() {
  return (
    <>
      <Route path="/" element={<CompaniesDirectory />} />
      <Route path="/:id" element={<CompanyDetails />} />
    </>
  );
}

export default AppRoutes;
