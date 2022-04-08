import React from 'react';
import cl from "./gifItem.module.css"

const GifItem = ({src, remove}) => {
    return (
        <div className={cl.container}>
            <img src={src} className={cl.image} />
                <button className={cl.btn}  onClick={remove}> Удалить </button>
        </div>
    );
};

export default GifItem;