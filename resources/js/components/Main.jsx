import React from 'react';
import Login from "./Login";
import Menu from "./Menu";
import Input from "./Input";
import Homenl from "./Homenl";
import Check from "./Check";
import UserEdit from "./UserEdit";
import Registro from "./Registro";
import ProductCard from "./ProductCard";
import Profile from "./Profile";
import PayPal from "./PayPal";
import Stock from "./Stock";
import CHistorial from "./CHistorial";

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
            <Route path="Registro" element={<Registro />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="UserEdit" element={<UserEdit />} />
            <Route path="PayPal" element={<PayPal />} />
            <Route path="Stock" element={<Stock />} />
            <Route path="CHistorial" element={<CHistorial />} />
        </Route>
    </Routes>
    )
}

export default Main