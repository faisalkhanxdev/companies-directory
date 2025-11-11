import React from "react";

export default function EmptyState({ searchTerm = "" }) {
  const message = searchTerm
    ? `No companies found for "${searchTerm}"`
    : "No Companies Found";

  const submessage = searchTerm
    ? "Try refining your search or adjusting filters."
    : "Try adjusting your filters or check back later.";

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] p-8">
      <div className="text-center max-w-md">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-linear-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50"></div>
          <svg
            className="w-32 h-32 text-gray-300 mx-auto relative animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3">{message}</h3>
        <p className="text-gray-500 mb-8 text-lg">{submessage}</p>

        {searchTerm && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Check your spelling or try different
              keywords
            </p>
          </div>
        )}

        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reset Filters
        </button>
      </div>
    </div>
  );
}
