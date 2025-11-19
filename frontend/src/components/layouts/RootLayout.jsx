import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// Components
import Loader from "../ui/Loader";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Providers
import { CompaniesProvider } from "../../context/CompaniesContext";

function RootLayout() {
  return (
    <CompaniesProvider>
      <div className="min-h-screen bg-gray-50">
        {" "}
        {/* subtle page background */}
        <Navbar />
        <Suspense
          fallback={
            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center">
              <Loader />
            </div>
          }
        >
          <main className="mt-6 px-6">
            <Outlet />
          </main>
        </Suspense>
        <Footer />
      </div>
    </CompaniesProvider>
  );
}

export default RootLayout;
