import React from "react";

export default function CompanyCard({ company }) {
  const colors = [
    "from-blue-500 to-indigo-600",
    "from-purple-500 to-pink-600",
    "from-green-500 to-teal-600",
    "from-orange-500 to-red-600",
  ];
  const colorIndex = company.id % colors.length;
return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-300 hover:-translate-y-2 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-50 to-indigo-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0 mr-3">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
              {company.name}
            </h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-linear-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 mt-2">
              {company.industry}
            </span>
          </div>
          
          <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${colors[colorIndex]} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {company.name.charAt(0)}
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2.5 text-gray-700 group-hover:text-gray-900 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{company.location}</span>
          </div>

          <div className="flex items-center gap-2.5 text-gray-700 group-hover:text-gray-900 transition-colors">
            <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">{company.employees.toLocaleString()} Employees</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">ID: {company.id}</span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-600 font-semibold">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
