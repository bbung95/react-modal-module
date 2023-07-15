import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalContextProvider } from "./lib";
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(ModalContextProvider, { children: _jsx(App, {}) }));
