import React from "react";

export default function EmptyState({ searchTerm = "" }) {
  const message = searchTerm
    ? `No companies found for "${searchTerm}"`
    : "No Companies Found";

  const submessage = searchTerm
    ? "Try refining your search or check the spelling."
    : "Try adjusting your filters or adding a new company.";

  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh]">
      <div className="text-center">
        <svg
          className="w-24 h-24 text-gray-300 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">{message}</h3>
        <p className="text-gray-500 mb-4">{submessage}</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Go Home
        </button>
      </div>
    </div>
  );
}
