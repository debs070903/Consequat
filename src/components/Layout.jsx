import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export const Layout = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#4A5565]">
      <Navbar />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color="#3498db" size={50} />
        </div>
      ) : (
        <main className="flex-grow">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};
