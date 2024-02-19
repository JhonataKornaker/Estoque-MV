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
                <Route path="/" component={Home} />
                <Route path="/obras" component={Obras} />
            </Routes>
            <Rodape/>
        </BrowserRouter>
    )
}

export default AppRouter;