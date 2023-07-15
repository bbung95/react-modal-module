import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContextProvider } from "./lib/modal/ModalContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>
);
