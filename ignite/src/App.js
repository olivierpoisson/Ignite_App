import { useEffect } from "react";
import Home from "./pages/home";
import GlobalStyles from "./components/globalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:id" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
