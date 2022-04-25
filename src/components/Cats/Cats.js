import React, {useRef} from 'react';
import {ADD, useCatReducer} from "../../reducers";
import {Cat} from "../Cat/Cat";

export const Cats = () => {
    const catRef = useRef();
    const [state, dispatch] = useCatReducer();

    const addCat = () => {
        const newCat = catRef.current.value;
        dispatch({type: ADD, payload: {cat: newCat}})
        catRef.current.value='';
    }

    return (
        <div>
            <input type={'text'} ref={catRef} placeholder={'Cat name'}/>
            <button onClick={addCat}>ADD</button>
            <hr/>
            <div>{state.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}</div>
        </div>
    );
};

