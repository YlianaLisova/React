import React from 'react';

export const Post = ({post}) => {
    return (
        <div>
            {post.id} - {post.title}
        </div>
    );
};

