import React from 'react';
import {AllTodos, Todos} from "./components";

export const App = () => {
    return (
        <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <Todos/>
            <AllTodos/>
        </div>
    );
};

