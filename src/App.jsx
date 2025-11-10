import React, { useEffect } from "react";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchCompanies } from "./store/companies/companiesSlice";
import { Toaster } from "react-hot-toast";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Modern Header with Gradient */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Companies Directory
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Explore and filter companies across India
              </p>
            </div>
            
            {/* Optional: Stats Badge */}
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-medium text-blue-900">Live Directory</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Home />
      </main>

      {/* Toast Notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{ 
          duration: 2500,
          style: {
            background: '#fff',
            color: '#374151',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
          }
        }} 
      />
    </div>
  );
}