import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias/categorias";
import itensSlice from "./reducers/categorias/itens";

const store = configureStore({
  reducer: {
    categorias: categoriasSlice.reducer,
    itens: itensSlice.reducer,
  },
});

export default store;
