import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux/slices/counter.slice";

export const Counter = () => {
    const {count1,count2} = useSelector(state=> state.counter);
    const dispatch = useDispatch();
    const resetInput = useRef();
    const countInput2 = () => {
        dispatch(counterActions.reset2(resetInput.current.value))
        resetInput.current.value = ''
    }
    return (
        <div>
            <h1>Count1: {count1}</h1>
            <button onClick={() => dispatch(counterActions.incCount1())}>inc</button>
            <button onClick={() => dispatch(counterActions.decCount1())}>dec</button>
            <button onClick={() => dispatch(counterActions.reset1())}>reset</button>
            <h1>Count2: {count2}</h1>
            <button onClick={() => dispatch(counterActions.incCount2())}>inc</button>
            <button onClick={() => dispatch(counterActions.decCount2())}>dec</button>
            <input type="text" ref={resetInput}/>
            <button onClick={countInput2}>reset</button>
        </div>
    );
};

