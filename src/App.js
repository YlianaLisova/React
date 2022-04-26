import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const state = useSelector(state => state);
    
    const dispatch = useDispatch();
    return (
        <div>
            <h1>state is - {state}</h1>
            <button onClick={() => {
                dispatch({type: 'INC', payload: 1})
            }}>inc
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC', payload: 1})

            }}>dec
            </button>
            <button onClick={() => {
                dispatch({type: 'RESET', payload: 0})

            }}>reset
            </button>
        </div>
    );
}

export default App;
