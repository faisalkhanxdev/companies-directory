import React from "react";

export default function StatsBar({ count, layout, onLayoutChange }) {
  return (
    <div className="bg-linear-to-r from-white to-blue-50/30 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/80 shadow-sm">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-br from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg">
            <span className="text-2xl font-bold">{count}</span>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Results</p>
            <p className="text-gray-700 font-semibold">
              {count === 1 ? "1 Company" : `${count} Companies`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-gray-100/80 rounded-xl p-1.5 shadow-inner">
          <button
            onClick={() => onLayoutChange("cards")}
            className={`px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 font-medium ${
              layout === "cards"
                ? "bg-white shadow-md text-blue-600 scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
            }`}
            aria-label="Card view"
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="hidden sm:inline">Cards</span>
          </button>
          <button
            onClick={() => onLayoutChange("table")}
            className={`px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 font-medium ${
              layout === "table"
                ? "bg-white shadow-md text-blue-600 scale-105"
                : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
            }`}
            aria-label="Table view"
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
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>
      </div>
    </div>
  );
}
