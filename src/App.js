import React from 'react';
import './App.css'

import {Comments, Posts, Users} from "./components";

export const App = () => {
    return (
        <div>
            <div className={'users_posts'}>
                <div className={'users'}><Users/></div>
                <div className={'posts'}><Posts/></div>
            </div>
            <div className={'comments'}><Comments/></div>
        </div>
    );
};

