import React from 'react';
import ImageItem from "./ImageItem";
import {CSSTransition} from "react-transition-group";
import {Carousel} from "react-responsive-carousel";

//
// const ImageCarousel = ({gifs}) => (
//     const items = children.map((itemData) => {
//         return <ImageItem url={itemData.images.downsized.url}/>;
//     });
//     return <div className="gifs-container"> {items} </div>
//     //     {gifs.map((itemData) => (
//     //         <ImageItem url={itemData.images.downsized.url}>
//     //         </ImageItem>
//     //     ))}
// );
//
// export default ImageCarousel;


const ImageCarousel = ({gifs}) => {
    const items = gifs.map((itemData) => {
        return <ImageItem url={itemData.images.downsized.url} />;
    });
    return <div className="gifs-container"> {items} </div>;
};

export default ImageCarousel;