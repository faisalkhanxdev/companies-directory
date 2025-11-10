import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearch,
  setLocation,
  setSort,
  setPage,
  setPageSize,
  toggleInfinite,
} from "../store/companies/companiesSlice";

// Components
import CompanyCard from "../components/CompanyCard";
import CompanyTable from "../components/CompanyTable";
import FilterBar from "../components/FilterBar";
import StatsBar from "../components/StatsBar";
import FilterControls from "../components/FilterControls";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";
import InfiniteScrollEnd from "../components/InfiniteScrollEnd";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function Home() {
  const { all, status, error, filters } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  const [layout, setLayout] = useState("cards");

  // Unique locations for dropdown
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(all.map((c) => c.location)))],
    [all]
  );

  // Filter + Sort Logic
  const filtered = useMemo(() => {
    let items = all.slice();

    if (filters.search) {
      items = items.filter((c) =>
        c.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.location && filters.location !== "All") {
      items = items.filter((c) => c.location === filters.location);
    }

    switch (filters.sort) {
      case "name_asc":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        items.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "employees_asc":
        items.sort((a, b) => a.employees - b.employees);
        break;
      case "employees_desc":
        items.sort((a, b) => b.employees - a.employees);
        break;
      default:
        break;
    }

    return items;
  }, [all, filters.search, filters.location, filters.sort]);

  // Pagination logic
  const startIndex = (filters.page - 1) * filters.pageSize;
  const pageItems = filtered.slice(startIndex, startIndex + filters.pageSize);

  // Infinite scroll
  useInfiniteScroll(filters.infinite, () => {
    if (filters.infinite && status === "succeeded") {
      dispatch(setPage(filters.page + 1));
    }
  });

  // Items to render
  const itemsToRender = filters.infinite
    ? filtered.slice(0, filters.page * filters.pageSize)
    : pageItems;

  // Reset page when filtered list changes
  useEffect(() => {
    if (filters.page > Math.ceil(filtered.length / filters.pageSize)) {
      dispatch(setPage(1));
    }
  }, [filtered.length, filters.page, filters.pageSize, dispatch]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh]">
        <Loader />
        <p className="mt-4 text-gray-600 animate-pulse">Loading companies...</p>
      </div>
    );
  }

  // Error state
  if (status === "failed") {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] text-center">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md">
          <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h3 className="text-xl font-semibold text-red-900 mb-2">Failed to Load Data</h3>
          <p className="text-gray-600 mb-6">{error || "Something went wrong"}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Empty state
if (status === "succeeded" && filtered.length === 0) {
  return <EmptyState searchTerm={filters.search} />;
}

  // Main UI
  return (
    <div className="space-y-6">
      <StatsBar count={filtered.length} layout={layout} onLayoutChange={setLayout} />

      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border border-gray-200">
        <FilterBar
          search={filters.search}
          onSearch={(v) => dispatch(setSearch(v))}
          location={filters.location}
          onLocation={(v) => dispatch(setLocation(v))}
          locations={locations}
          sort={filters.sort}
          onSort={(v) => dispatch(setSort(v))}
        />

        <FilterControls
          infinite={filters.infinite}
          onToggleInfinite={() => dispatch(toggleInfinite())}
          pageSize={filters.pageSize}
          onPageSizeChange={(v) => dispatch(setPageSize(v))}
        />
      </div>

      <section className="min-h-[400px]">
        {layout === "cards" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {itemsToRender.map((c) => (
              <CompanyCard key={c.id} company={c} />
            ))}
          </div>
        ) : (
          <CompanyTable companies={itemsToRender} />
        )}
      </section>

      {!filters.infinite && (
        <Pagination
          total={filtered.length}
          currentPage={filters.page}
          pageSize={filters.pageSize}
          onPage={(p) => dispatch(setPage(p))}
        />
      )}

      {filters.infinite && filtered.length === itemsToRender.length && itemsToRender.length > 0 && (
        <InfiniteScrollEnd />
      )}
    </div>
  );
}