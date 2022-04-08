import React, { Fragment } from 'react';
import ImageItem from "./ImageItem";
import {CSSTransition} from "react-transition-group";
import { Carousel } from '@giphy/react-components'

// const ImageCarousel = ({ items }) => (
//     <div>
//         {items.map(itemData => (
//             <Fragment key={itemData}>
//                 <ImageItem url={itemData.images.downsized.url}> </ImageItem>
//             </Fragment>
//
//         ))}
//     </div>
// );

// export default ImageCarousel;


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



const ImageCarousel = ({gifs, choose}) => {
    console.log(gifs);
    const items = gifs.map((itemData) => {
        return <ImageItem url={itemData.images.downsized.url} choose={choose} />;
    });
    return <div className="gifs-container"> {items} </div>;

};
//<div className="gifs-container"> {items} </div>
export default ImageCarousel;