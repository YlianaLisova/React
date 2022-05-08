import React from 'react';

export const OneTodo = ({item}) => {
    const {id, title} = item
    return (
        <div>
            <div>{id} - {title}</div>
        </div>
    );
};

