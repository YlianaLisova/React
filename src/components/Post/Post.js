import React from 'react';
import {Button} from "../Button/Button";

export const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {id} - {title} <Button to={id.toString()} state={post}>get Details</Button>
        </div>
    );
};

