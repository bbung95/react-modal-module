var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
var ModalContext = createContext(null);
export var ModalContextProvider = function (_a) {
    var children = _a.children;
    var modalValue = { value: "안녕하세요" };
    return _jsx(ModalContext.Provider, __assign({ value: modalValue }, { children: children }));
};
export var useModal = function () {
    var context = useContext(ModalContext);
    if (!context) {
        throw new Error("not found ModalContext");
    }
    return context;
};
