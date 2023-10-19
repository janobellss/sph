import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import type { PreloadedState } from "@reduxjs/toolkit";
import { AppStore, RootState, setupStore } from "./app/store.ts";
import { router } from "./Routes/Routes.tsx";
import "./index.css";

const preloadedState: PreloadedState<RootState> = {};
const store: AppStore = setupStore(preloadedState);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
