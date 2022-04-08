import React from 'react';

const ImageItem = (props) => {
    return (
            <img className="gif-item" src={props.url}  onClick={e =>props.choose(e)}/>
    );
};
export default ImageItem;