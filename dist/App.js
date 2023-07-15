import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from "./lib";
var App = function () {
    var value = useModal().value;
    return _jsx("div", { children: value });
};
export default App;
