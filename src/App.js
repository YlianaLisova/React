import React, {useReducer} from 'react';

const init = (initArg) => {
  return {count1: initArg}
}
const reducer = (state,action) => {
  switch (action.type) {
      case 'inc':
          return {...state, count1: state.count1 + 1}
      case 'dec':
          return {...state, count1: state.count1 - 1}
      case 'reset':
          return {...state, count1: 0}
      case 'set':
          return {...state, count1: action.payload}
      default:
          return {state}
  }
}
export const App = () => {
    const [state,dispatch] = useReducer(reducer, 0, init);

    const inc = () => {
      dispatch({type:'inc'})
    }
    const dec = () => {
      dispatch({type: 'dec'})
    }
    const reset = () => {
      dispatch({type:'reset'})
    }
    const set = () => {
      dispatch({type: 'set', payload:10})
    }

    return (
        <div>
            <p>{state.count1}</p>
            <button onClick={()=> inc()}>inc</button>
            <button onClick={()=> dec()}>dec</button>
            <button onClick={()=> reset()}>reset</button>
            <button onClick={()=> set()}>setTo10</button>
        </div>
    );
};

