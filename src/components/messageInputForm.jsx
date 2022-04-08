import React, {useState} from 'react';
import InputLine from "./UI/input/inputLine";
import SendButton from "./UI/button/sendButton";
import {Gif, Grid} from "@giphy/react-components";
import {GridDemo} from '../API/gifPost'



const MessageInputForm = ({create}) => {

    const [text, setText] = useState('');
    const [interval, setInterval] = useState(null);

    const addNewMessage = (e) => {
        e.preventDefault();
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();

        if (choseGif != null) {
            const newMessage = {
                hours,
                minutes,
                text,
                userName: "Nathaniel",
                gif: choseGif.images.downsized.url
            }
            create(newMessage);
            setText('');
        }
        else {
            const newMessage = {
                hours,
                minutes,
                text,
                userName: "Nathaniel",
                gif: '-'
            }
            create(newMessage);
            setText('');
        }

        setChoseGif(null);

    }

    const searchGif = (e) => {
        e.preventDefault();
        const reGif = /\/gif +[ ]*/i;
        setText(e.target.value);
        if (reGif.exec(e.target.value)){
            const textSearch = e.target.value.slice(5);
            if (textSearch !== ''){
                if (interval) {
                    clearInterval(interval);
                    setInterval(null);
                }
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
        <form className="inputForm">

            {/*{result  && <ImageCarousel gifs={result}  schoose={chosenGif}> </ImageCarousel> }*/}
            {choseGif &&
                <img src={choseGif.images.downsized.url} className='chosenGif'/>}
            <GridDemo
                onGifClick={(gif, e) => {
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