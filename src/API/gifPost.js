
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import React, {useState} from "react";
import ResizeObserver from "react-resize-observer";
import cl from'../components/UI/App.module.css';

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function GridDemo({ onGifClick, name}) {

    const [width, setWidth] = useState(window.innerWidth);

        let ser = name
        const reGif = /\/gif +[ ]*/i;

        if (!reGif.exec(ser)) {
            return <div> </div>
        }
        let searchName = ser.slice(5);
        if (searchName.slice(-1) === ' ') {
            const fetchGifs = (offset: number) =>
                giphyFetch.search(searchName, { offset, limit: 10 });
            return (
                <div className={cl.gifsContainer}  id='scroll'>
                    <Grid
                        onGifClick={onGifClick}
                        fetchGifs={fetchGifs}
                        width={width}
                        columns={3}
                        gutter={6}
                    />
                    <ResizeObserver
                        onResize={({ width }) => {
                            setWidth(width);
                        }}
                    />
                </div>
            );
        }
        if (searchName.trim() === ''){
            const fetchGifs = (offset: number) =>
                giphyFetch.trending( { offset, limit: 10 });
            return (
                <div className={cl.gifsContainer}  id='scroll'>
                    <Grid
                        onGifClick={onGifClick}
                        fetchGifs={fetchGifs}
                        width={width}
                        columns={3}
                        gutter={6}
                    />
                    <ResizeObserver
                        onResize={({ width }) => {
                            setWidth(width);
                        }}
                    />
                </div>
            );
        }

}

export {GridDemo};
