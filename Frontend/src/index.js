import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootRouter } from "./RootRouter";
import { NextUIProvider } from "@nextui-org/system";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


//bunu root app de dene
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
      <NextUIProvider >
        <BrowserRouter>
          <RootRouter />
          <ReactQueryDevtools />
        </BrowserRouter>
      </NextUIProvider>
    </QueryClientProvider>
);
