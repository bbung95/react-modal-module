import { createContext, useCallback, useContext, useState } from "react";
import ModalContainer from "./ModalContainer";

interface ModalContextProps {
    content: React.ReactNode;
    isOpen: boolean;
    openModal: (arg1: React.ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const openModal = useCallback((component: React.ReactNode) => {
        setContent(component);
        setIsOpen(true);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    const modalValue = {
        content,
        isOpen,
        openModal,
        closeModal,
    };

    return (
        <ModalContext.Provider value={modalValue}>
            {children}
            <ModalContainer />
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("not found ModalContext");
    }

    return context;
};
