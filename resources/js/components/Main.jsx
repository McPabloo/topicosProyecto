import React from 'react';
import Login from "./Login";
import Menu from "./Menu";
import Input from "./Input";
import Homenl from "./Homenl";
import Check from "./Check";
import ProductCard from "./ProductCard";
import {Route, Routes, Navigate} from "react-router-dom";

function Main(){
    return(
    <Routes>
        <Route path="/topicos/public/" element={<Menu/>}>
            <Route path="Input" element={<Input />} />
            <Route path="Login" element={<Login />} />
            <Route path="ProductCard" element={<ProductCard />} />
            <Route path="Check" element={<Check />} />
            <Route path="Homenl" element={<Homenl />} />
        </Route>
    </Routes>
    )
}

export default Main