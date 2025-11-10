import React from "react";

export default function FilterControls({ infinite, onToggleInfinite, pageSize, onPageSizeChange }) {
  return (
    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 flex-wrap gap-3">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">View Mode:</span>
        <button
          onClick={onToggleInfinite}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            infinite ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-pressed={infinite}
        >
          {infinite ? "Infinite Scroll" : "Pagination"}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="page-size-select" className="text-sm text-gray-600">
          Per Page:
        </label>
        <select
          id="page-size-select"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
}