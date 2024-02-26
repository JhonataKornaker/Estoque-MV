import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Rodape from "./component/Rodape";
import Obras from "./pages/Obras";


function AppRouter() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/obras" element={<Obras/>} />
            </Routes>
            <Rodape/>
        </BrowserRouter>
    )
}

export default AppRouter;