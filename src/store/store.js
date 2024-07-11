import { configureStore } from "@reduxjs/toolkit";
import addTo from "./addTo";

const store = configureStore({
  reducer: {
    addTo: addTo,
  },
});

export default store;
