import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let initialState = 0;

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INC':
            return state + action.payload;
        case'DEC':
            return state - action.payload;
        case'RESET':
            return action.payload;
        default:
            return state;

    }
}

const store = createStore(reducer);


root.render(<Provider store={store}>
    <App/>
</Provider>)
