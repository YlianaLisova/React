import React from 'react';
import {CarForm} from "../../components";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
        </div>
    );
};

