import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-blue-100 rounded-full"></div>
        {/* Spinning gradient ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-blue-600 border-r-indigo-600 rounded-full animate-spin"></div>
        {/* Center pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-linear-to-br from-blue-600 to-indigo-600 rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
      <p className="mt-6 text-sm font-semibold text-gray-700 animate-pulse">Loading companies...</p>
      <div className="flex gap-1 mt-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
}