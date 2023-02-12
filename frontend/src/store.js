import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import filterBySlice from "./features/filterBySlice";
import wishlistAndCartSlice from "./features/wishlistAndCartSlice";
import authSlice from "./features/authSlice";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import adminSlice from "./features/adminSlice";

const persistConfig = {
  key: "wishlistAndCartSlice",
  storage,
};
const wishlistAndCartPersistedReducer = persistReducer(persistConfig, wishlistAndCartSlice);

export const store = configureStore({
  reducer: {
    productsData: productSlice,
    filterByCategoryAndPrice: filterBySlice,
    wishlistAndCartSection: wishlistAndCartPersistedReducer,
    userAuth: authSlice,
    adminOperations: adminSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

//the middleware is to permit those actions as non serializable values
