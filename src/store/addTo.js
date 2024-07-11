import { createSlice } from "@reduxjs/toolkit";

const addToSlice = createSlice({
  name: "addTo",
  initialState: {
    list: [],
    like: [],
    users: [],
    statist: [],
  },
  reducers: {
    addToList: (state, action) => {
      const itemExists = state.list.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.list.push(action.payload);
        action.payload.amount = 1;
      }
    },
    addToListSecend: (state, action) => {
      const itemExists = state.list.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.list.push(action.payload);
      }
    },
    removeFromList: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
      action.payload.amount = 0;
    },
    addToLike: (state, action) => {
      const itemExists = state.like.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.like.push(action.payload);
      }
    },
    removeFromLike: (state, action) => {
      state.like = state.like.filter((item) => item.id !== action.payload.id);
    },
    addToStat: (state, action) => {
      const itemExists = state.statist.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.statist.push(action.payload);
      }
    },
    removeFromStat: (state, action) => {
      state.statist = state.statist.filter(
        (item) => item.id !== action.payload.id
      );
    },
    addToUser: (state, action) => {
      state.users = [];
      state.users.push(action.payload);
      action.payload.amount = 1;
    },
    addToUserPlus: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.amount += 1;
      }
    },
    addToUserMinus: (state, action) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        if (user.amount > 1) {
          user.amount -= 1;
        } else {
          state.users = state.users.filter(
            (user) => user.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const {
  addToListSecend,
  addToUserMinus,
  addToUserPlus,
  addToList,
  removeFromList,
  addToLike,
  removeFromLike,
  addToStat,
  removeFromStat,
  addToUser,
} = addToSlice.actions;
export default addToSlice.reducer;
