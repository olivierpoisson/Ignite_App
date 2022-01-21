import { useEffect } from "react";
import Home from "./pages/home";
import GlobalStyles from "./components/globalStyles";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Home></Home>
        </div>
    );
}

export default App;
