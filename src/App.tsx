import { useModal } from "./lib";

const App = () => {
    const { value } = useModal();

    return <div>{value}</div>;
};

export default App;
