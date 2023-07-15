<div align="center">
  <h1>react-common-modal-module</h1>
  <p>React Context API를 이용한 공통 Modal component 입니다.</p>
</div>

## Install

```bash
npm install react-common-modal-module
# or
yarn add react-common-modal-module
```

## Usage

### ContextProvider setting

```jsx live
// root index.jsx or App.jsx...
// ...
import { ModalContextProvider } from "react-common-modal-module";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>
);
```

### openModal

Modal Contents는 기본 스타일이 적용되어 있지 않으며 중앙정렬이 되어 있습니다.

각각 컴포넌트를 openModal(arg1 : React.ReactNode)을 사용하여 적용합니다.

```jsx live
import { useModal } from "react-common-modal-module";

function App() {
    const { openModal } = useModal();

    const handleOpenModal = () => {
        // modal component 커스텀
        // React.ReactNode arg
        openModal(<div>Modal Component</div>);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>open modal</button>
        </div>
    );
}
```

### closeModal

background 배경이 fixed로 적용되어 있으며 배경 클릭시 closeModal이 동작하도록 되어있습니다.

```jsx live
import { useModal } from "react-common-modal-module";

function App() {
    const { openModal, closeModal } = useModal();

    const handleOpenModal = () => {
        // modal component 커스텀
        openModal(
            <div>
                Modal Component
                <button onClick={closeModal}>close modal</button>
            </div>
        );
    };

    return (
        <div>
            <button onClick={handleOpenModal}>open modal</button>
        </div>
    );
}
```

## Issue Reporting

버그를 발견했거나 기능 요청이 있는 경우 Issue 부탁드립니다.
