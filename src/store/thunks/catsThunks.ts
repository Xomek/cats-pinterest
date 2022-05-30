import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICat } from "../../interfaces/cat.interface";

export const getCats = createAsyncThunk(
  "cats/getCats",
  async (limit: number, { rejectWithValue }) => {
    try {
      const catsArr = await axios.get<ICat[]>(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}`
      );
      return catsArr.data;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);
