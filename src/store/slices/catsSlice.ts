import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICat } from "../../interfaces/cat.interface";
import { getCats } from "../thunks/catsThunks";

interface CatsState {
  cats: ICat[];
  isLoading: boolean;
  error: string;
}

const initialState: CatsState = {
  cats: [],
  isLoading: false,
  error: "",
};

const catsSlice = createSlice({
  initialState,
  name: "cats",
  reducers: {
    toggleLike(state, action: PayloadAction<string>) {
      state.cats.map((cat) => {
        if (cat.id === action.payload) cat.isFavorite = !cat.isFavorite;
      });
    },
  },
  extraReducers: {
    [getCats.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCats.fulfilled.type]: (state, action: PayloadAction<ICat[]>) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    [getCats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { toggleLike } = catsSlice.actions;
export default catsSlice.reducer;
