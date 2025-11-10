import React from "react";

export default function StatsBar({ count, layout, onLayoutChange }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-800">{count}</span>
          <span className="text-gray-600">
            {count === 1 ? 'company' : 'companies'} found
          </span>
        </div>
        
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onLayoutChange("cards")}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              layout === "cards" ? "bg-white shadow-sm text-blue-600" : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Card view"
            aria-pressed={layout === "cards"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => onLayoutChange("table")}
            className={`px-4 py-2 rounded-md transition-all duration-200 ${
              layout === "table" ? "bg-white shadow-sm text-blue-600" : "text-gray-600 hover:text-gray-900"
            }`}
            aria-label="Table view"
            aria-pressed={layout === "table"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}