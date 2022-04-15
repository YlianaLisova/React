import React, {useState} from 'react';

import {CarForm, Cars} from "./components";

function App() {
    const [newCar, setNewCar] = useState();
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null)
    return (
        <div>
            <CarForm setNewCar={setNewCar} carForUpdate={carForUpdate} setUpdatedCar={setUpdatedCar}/>
            <hr/>
            <Cars newCar={newCar} setCarForUpdate={setCarForUpdate} updatedCar={updatedCar}/>
        </div>
    );
}

export default App;
