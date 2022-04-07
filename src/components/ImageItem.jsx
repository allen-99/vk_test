import React from 'react';

const ImageItem = (props) => {
    return (
        <img className="gif-item" src={props.url} />
    );
};
export default ImageItem;