import React from 'react';
import {Button} from "../Button/Button";

export const Post = ({post, flag}) => {
    const {id, title} = post;
    return (
        <div>
            {id} - {title}
            {
                flag && <Button to={`${id}`} state={post}>get Details</Button>
            }
        </div>
    );
};

