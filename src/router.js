import Login from "./pages/login";
import Cliente from "./pages/clientes";
import Produto from "./pages/produtos";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

const Router = () => {
    return(
        <BrowserRouter>
            {/* Aqui posso ter um menu dinamico */}
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/clientes" element={<Cliente/>}/>
                <Route path="/produtos" element={<Produto/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;