import React from 'react';
import cl from "./gifItem.module.css"

const GifItem = ({src, className, remove}) => {
    return (
        <div className={cl.container}>
            <img src={src} className={className} />
                <button className={cl.btn}  onClick={remove}> Удалить </button>
        </div>
    );
};

export default GifItem;