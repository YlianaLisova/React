import React, {useState} from 'react';

import {CarForm, Cars} from "./components";

function App() {
    const [newCar, setNewCar] = useState();
    const [carForUpdate, setCarForUpdate] = useState(null);
    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}

export default App;
