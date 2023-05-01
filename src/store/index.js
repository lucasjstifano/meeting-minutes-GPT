import { configureStore } from "@reduxjs/toolkit";
import calculatedDataReducer from "./calculatedDataSlice";
import customerReducer from "./customerSlice";

export default configureStore({
  reducer: {
    customers: customerReducer,
    calculatedCustomers: calculatedDataReducer,
  },
});
