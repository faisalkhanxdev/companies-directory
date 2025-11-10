import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCompaniesAPI } from "../../api/companiesAPI";

export const fetchCompanies = createAsyncThunk(
  "companies/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchCompaniesAPI();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  all: [],
  status: "idle",
  error: null,
  filters: {
    search: "",
    location: "All",
    sort: "",
    page: 1,
    pageSize: 6,
    infinite: false,
  },
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.filters.search = action.payload;
      state.filters.page = 1;
    },
    setLocation(state, action) {
      state.filters.location = action.payload;
      state.filters.page = 1;
    },
    setSort(state, action) {
      state.filters.sort = action.payload;
    },
    setPage(state, action) {
      state.filters.page = action.payload;
    },
    setPageSize(state, action) {
      state.filters.pageSize = action.payload;
    },
    toggleInfinite(state) {
      state.filters.infinite = !state.filters.infinite;
      state.filters.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.all = action.payload;
        state.error = null;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const {
  setSearch,
  setLocation,
  setSort,
  setPage,
  setPageSize,
  toggleInfinite,
} = companiesSlice.actions;

export default companiesSlice.reducer;
