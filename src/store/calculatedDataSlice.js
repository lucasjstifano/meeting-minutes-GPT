import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// ** CALCULATE RESULTS
export const calculateResults = createAsyncThunk(
  "results/calculate",
  async (customers) => {
    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customers),
    });

    const results = await response.json();
    console.log("Calculated DATA:", results);
    return results;
  }
);

/*=============================================
=                INITIAL STATES              =
=============================================*/
const initialState = {
  whitelist: [],
  loading: false,
};

/*=============================================
  =                EXTRA REDUCERS              =
  =============================================*/
function extraReducers(builder) {
  // CALCULATE RESULTS
  builder
    .addCase(calculateResults.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(calculateResults.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(calculateResults.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}

const calculatedDataSlice = createSlice({
  name: "calculatedData",
  initialState,
  reducers: {},
  extraReducers,
});

// export const { calculateResults } = calculatedDataSlice.actions;
export default calculatedDataSlice.reducer;
