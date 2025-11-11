import React from "react";

export default function Pagination({ total, currentPage, pageSize, onPage }) {
 const totalPages = Math.ceil(total / pageSize);
  
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8">
      <div className="flex items-center gap-1 bg-white rounded-2xl shadow-md border border-gray-200 p-1.5">
        <button
          onClick={() => onPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-xl transition-all duration-200 ${
            currentPage === 1 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
          }`}
          aria-label="Previous page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {pageNumbers.map((page, index) => 
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400 font-bold">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPage(page)}
              className={`min-w-10 px-3 py-2 rounded-xl font-bold transition-all duration-300 ${
                currentPage === page 
                  ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110" 
                  : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
              }`}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => onPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-xl transition-all duration-200 ${
            currentPage === totalPages 
              ? "text-gray-300 cursor-not-allowed" 
              : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
          }`}
          aria-label="Next page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-2 text-sm bg-gray-50 px-4 py-2 rounded-xl border border-gray-200">
        <span className="text-gray-600">Page</span>
        <span className="font-bold text-blue-600 text-base">{currentPage}</span>
        <span className="text-gray-600">of</span>
        <span className="font-bold text-gray-900 text-base">{totalPages}</span>
      </div>
    </div>
  );
}