import React from 'react';

function BlogItem({item}) {
    const {title, content} = item
    return (
        <div className='mb-7'>
            <h1 className='text-xl font-bold mb-2'>{title}</h1>
            <p className='text-slate-700 ml-5'>{content}</p>
        </div>
    );
}

export default BlogItem;