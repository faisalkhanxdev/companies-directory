import React from "react";

export default function InfiniteScrollEnd() {
   return (
    <div className="py-10 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-md">
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-sm font-bold text-green-800">All Caught Up!</p>
          <p className="text-xs text-green-600">You've reached the end</p>
        </div>
      </div>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-6 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        Back to top
      </button>
    </div>
  );
}