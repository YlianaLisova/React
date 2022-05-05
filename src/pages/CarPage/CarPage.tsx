import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";

export const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <div>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

