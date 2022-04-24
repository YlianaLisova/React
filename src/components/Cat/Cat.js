import React from 'react';

export const Cat = ({cat,deleteCat}) => {

    return (
        <div>
            {cat.id} -- {cat.name} <button onClick={deleteCat}>DELETE</button>
        </div>
    );
};

