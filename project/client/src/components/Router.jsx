import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Usuario from "../pages/Usuario";
import Barra from "./Barra";

import ClientShow from "../pages/ClientShow";
import ClientEdit from "../pages/ClientEdit";

import TransacoesShow from "../pages/TransacoesShow";

const Router = (props) => {
    return (
        <BrowserRouter>
        <Barra></Barra>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Usuario" element={<Usuario />} />

                <Route path="/ClientShow" element={<ClientShow />} />
                <Route path="/ClientEdit" element={<ClientEdit />} />

                <Route path="/TransacoesShow" element={<TransacoesShow />} />

            </Routes>
        </BrowserRouter>
    );
};
export default Router;
