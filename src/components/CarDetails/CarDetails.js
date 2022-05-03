import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {carActions} from "../../redux";

export const CarDetails = ({car,car:{id,model,price,year}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteById = async () => {
        await dispatch(carActions.deleteById({id}))
        navigate('/cars');
    }
    const updateCar = async () => {
        await dispatch(carActions.setCarForUpdate({car}))
    }
    return (
        <div>
            <p><b>Id: </b>{id}</p>
            <p><b>Model: </b>{model}</p>
            <p><b>Price: </b>{price}</p>
            <p><b>Year: </b>{year}</p>
            <button onClick={deleteById}>Delete</button>
            <button onClick={updateCar}>Update</button>
        </div>
    );
};

