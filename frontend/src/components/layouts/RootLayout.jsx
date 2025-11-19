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
      <div>
        <Navbar />

        {/* Main content */}
        <Suspense
          fallback={
            <div className="flex h-screen w-full items-center justify-center">
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>

        <Footer />
      </div>
    </CompaniesProvider>
  );
}

export default RootLayout;
