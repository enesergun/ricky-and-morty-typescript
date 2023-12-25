import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import charactersSlice from "./features/characters/charactersSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
  [charactersSlice.name]: charactersSlice.reducer,
},)

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

  export const makeStore = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
      return makeConfiguredStore();
    } else {
      // we need it only on client side
      const persistConfig = {
        key: "nextjs",
        whitelist: ["characters"], // make sure it does not clash with server keys
        storage,
      };
      const persistedReducer = persistReducer(persistConfig, rootReducer);
      let store: any = configureStore({
        reducer: persistedReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
      });
      store.__persistor = persistStore(store); // Nasty hack
      return store;
    }
  };

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);