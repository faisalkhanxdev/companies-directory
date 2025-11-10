import React from "react";

export default function InfiniteScrollEnd() {
  return (
    <div className="py-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-medium">All companies loaded</span>
      </div>
    </div>
  );
}