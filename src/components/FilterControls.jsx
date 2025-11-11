import React from "react";

export default function FilterControls({ infinite, onToggleInfinite, pageSize, onPageSizeChange }) {
return (
    <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-200 flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-700">View Mode:</span>
        <button
          onClick={onToggleInfinite}
          className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm ${
            infinite 
              ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl scale-105" 
              : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:shadow-md"
          }`}
        >
          <div className="flex items-center gap-2">
            {infinite ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Infinite Scroll
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Pagination
              </>
            )}
          </div>
        </button>
      </div>

      <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
        <label htmlFor="page-size-select" className="text-sm font-semibold text-gray-700">
          Items Per Page:
        </label>
        <select
          id="page-size-select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer font-medium"
        >
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}