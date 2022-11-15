import { configureStore } from "@reduxjs/toolkit";

import mapSlice from "./map-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { map: mapSlice.reducer },
});

export default store;
