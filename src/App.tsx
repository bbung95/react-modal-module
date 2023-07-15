import React from "react";
import { useModal } from "./lib/modal/ModalContextProvider";
import { styled } from "styled-components";

const App = () => {
    const { openModal } = useModal();

    const handleOnClick = () => {
        openModal(<ModalBox>모달입니다~</ModalBox>);
    };

    return (
        <div>
            react-common-modal-module
            <button onClick={handleOnClick}>모달 오픈</button>
        </div>
    );
};

const ModalBox = styled.div`
    width: calc(100vw - 120px);
    height: 200px;
    background-color: #fff;
`;

export default App;
