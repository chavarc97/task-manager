import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tareaReducer from "../features/tareas/tareasSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tarea: tareaReducer,
  },
});
