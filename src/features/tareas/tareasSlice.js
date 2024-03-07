import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tareas: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const tareaSlice = createSlice({
  name: "tarea",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: () => {},
});

export const { reset } = tareaSlice.actions;
export default tareaSlice.reducer;
