import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
import Home from "./pages/Home";

const Rotas = () => {
  return(
    <BrowserRouter>
    <Routes>
    <Route element = { <Home /> } path="/" exact />
    <Route element = { <Forms /> } path="/forms" />
    </Routes>
    </BrowserRouter>
  )
}

export default Rotas;