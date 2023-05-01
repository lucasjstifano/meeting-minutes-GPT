import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ** CALCULATE RESULTS
export const getCalculateResults = createAsyncThunk(
  "results/calculate",
  async () => {
    const response = await axios.get("http://localhost:5000/api/calculate");

    console.log(response.data);

    return response.data;
  }
);

/*=============================================
=                INITIAL STATES              =
=============================================*/
const initialState = {
  calculatedData: [],
  customers: [],
  loading: false,
  error: false,
};

/*=============================================
  =                EXTRA REDUCERS              =
  =============================================*/
function extraReducers(builder) {
  // CALCULATE RESULTS
  builder
    .addCase(getCalculateResults.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    })
    .addCase(getCalculateResults.fulfilled, (state, action) => {
      return {
        ...state,
        calculatedData: [action.payload],
        loading: false,
        error: null,
      };
    })
    .addCase(getCalculateResults.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    });
}

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
  },
  extraReducers,
});

export const { setCustomers } = customerSlice.actions;
export default customerSlice.reducer;
