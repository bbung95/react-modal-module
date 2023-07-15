interface ModalContextProps {
    value: string;
}
export declare const ModalContextProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useModal: () => ModalContextProps;
export {};
