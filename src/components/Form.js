import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {userAction} from "../redux";

export const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();
    const addUser = () => {
      dispatch(userAction.add({user: nameInput.current.value}));
      nameInput.current.value=''
    }
    return (
        <div>
            <input type="text" ref={nameInput} placeholder={'User name'}/>
            <button onClick={addUser}>ADD</button>
        </div>
    );
};

