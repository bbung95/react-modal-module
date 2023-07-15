import { styled } from "styled-components";
import { useModal } from "./ModalContextProvider";

const ModalContainer = () => {
    const { content, isOpen, closeModal } = useModal();

    return (
        <>
            {isOpen && (
                <>
                    <ModalBoxContainer>{content}</ModalBoxContainer>
                    <ModalBackground onClick={closeModal} />
                </>
            )}
        </>
    );
};

const ModalBoxContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
`;

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.2;
    z-index: 9999;
`;

export default ModalContainer;
