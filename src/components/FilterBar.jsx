import React from "react";

export default function FilterBar({ search, onSearch, location, onLocation, locations, sort, onSort }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <div>
        <label htmlFor="search-input" className="block text-sm font-medium text-gray-700 mb-2">
          Search
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Search companies..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="location-select" className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select
          id="location-select"
          value={location}
          onChange={(e) => onLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort-select" className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={(e) => onSort(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          <option value="">Default</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="employees_asc">Employees (Low-High)</option>
          <option value="employees_desc">Employees (High-Low)</option>
        </select>
      </div>
    </div>
  );
}