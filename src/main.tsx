import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContext } from "./context/AuthContext.tsx";
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0, retryDelay: 1000 } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <App />
        </AuthContext>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
