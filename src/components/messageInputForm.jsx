import React, {useState} from 'react';
import InputLine from "./UI/input/inputLine";
import SendButton from "./UI/button/sendButton";
import {GiphyFetch} from '@giphy/js-fetch-api'
import {Gif, Grid} from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";
import ImageItem from "./ImageItem";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");


// function GridDemo1({ onGifClick, name }) {
//     const reGif = /\/gif +[ ]*/i;
//     const [width, setWidth] = useState(window.innerWidth);
//     if (!reGif.exec(name)) {
//         return <div> </div>
//     }
//     const textSearch = name.slice(5);
//     let search;
//     if (textSearch !== ''){ }
//     return (
//         <div className='gifs-container'>
//             <Grid
//                 onGifClick={onGifClick}
//                 fetchGifs={search}
//                 width={width}
//                 name={textSearch}
//                 columns={3}
//                 gutter={6}
//             />
//             <ResizeObserver
//                 onResize={({ width }) => {
//                     setWidth(width);
//                 }}
//             />
//         </div>
//     );
// }

function GridDemo({ onGifClick, name}) {

    let ser = name

    const fetchGifs = (offset: number) =>
        giphyFetch.search('cat', { offset, limit: 10 });

    const reGif = /\/gif +[ ]*/i;
    const [width, setWidth] = useState(window.innerWidth);
    if (!reGif.exec(ser)) {
        return <div> </div>
    }
    console.log(fetchGifs)
    return (
        <div className='gifs-container'  id='scroll'>
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

const MessageInputForm = ({create}) => {
    const reGif = /\/gif[ ]*/i;

    const [text, setText] = useState('');
    const [interval, setInterval] = useState(null);

    const addNewMessage = (e) => {
        e.preventDefault();
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        console.log(choseGif)
        if (choseGif != '') {
            const newMessage = {
                hours,
                minutes,
                text,
                userName: "Nathaniel",
                gif: choseGif.images.downsized.url
            }
            console.log(newMessage)
            create(newMessage);
        }
        else {
            const newMessage = {
                hours,
                minutes,
                text,
                userName: "Nathaniel",
                gif: '-'
            }
            console.log(newMessage)
            create(newMessage);
            setText('');
        }

        setChoseGif('');

    }
    const searchGif = (e) => {
        e.preventDefault();

        setText(e.target.value);
        if (reGif.exec(e.target.value)){
            const textSearch = e.target.value.slice(5);
            if (textSearch !== ''){
                if (interval) {
                    clearInterval(interval);
                    setInterval(null);
                }
                // console.log(textSearch);
                const currentInterval = setTimeout(() => {

                }, 600);
                setInterval(currentInterval);

            }
        }
        else {
            setModalGif(undefined);
        }
    }

    const [modalGif, setModalGif] = useState();
    const [choseGif, setChoseGif] = useState(null);

    const ChoseGif = (e) => {
        e.preventDefault();
        setChoseGif(modalGif);
        setModalGif('')
        setText(' ')
    }

    return (
        <form>
            {/*{result  && <ImageCarousel gifs={result}  schoose={chosenGif}> </ImageCarousel> }*/}
            {choseGif &&
                <img src={choseGif.images.downsized.url} className='chosenGif'/>}
            <GridDemo
                onGifClick={(gif, e) => {
                    console.log(gif)
                    e.preventDefault();
                    setModalGif(gif);
                }}
                name={text}
            />
            {modalGif && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "rgba(0, 0, 0, .8)"
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        setModalGif(undefined);

                    }}
                >
                    <Gif gif={modalGif} width={200} />
                    <button onClick={ChoseGif}> + </button>
                </div>
            )}
            <InputLine
                type="text"
                placeholder="Напишите сообщение..."
                value={text}
                onChange={e => searchGif(e)}

            />
            <SendButton onClick={e => addNewMessage(e)} />
        </form>
    );
};

export default MessageInputForm;