import { createContext, useContext } from "react";

interface ModalContextProps {
    value: string;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const modalValue = { value: "안녕하세요" };

    return <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("not found ModalContext");
    }

    return context;
};
