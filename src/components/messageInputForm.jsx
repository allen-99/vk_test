import React, {useCallback, useState} from 'react';
import InputLine from "./UI/input/inputLine";
import SendButton from "./UI/button/sendButton";
import { GiphyFetch } from '@giphy/js-fetch-api'
import ImageCarousel from "./ImageCarousel";
import {throttle} from "lodash";
import LazyLoader from "./LazyLoader";
import ScrollContainer from "./ScroolContainer";
import {Carousel} from "react-responsive-carousel";

const MessageInputForm = ({create}) => {
    const reGif = /\/gif[ ]*/i;
    const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

    const [text, setText] = useState('');
    const [result, setResult] = useState([]);
    const [interval, setInterval] = useState(null);
    const [scrollContainerRect, setScrollContainerRect] = useState({});
    const [scrollTop, setScrollTop] = useState(0);
    const [page, setPage] = useState(0);

    const apiCall =  async (name, page) => {
        console.log('hui');
        const res = await giphyFetch.search(name, {sort: 'relevant', limit: 20, offset: page});
        // setResult([...result, res.data
        // ])
        setResult(res.data);
    }


    const addNewMessage = (e) => {
        e.preventDefault();

        const newMessage = {
            text,
            userName: "Nathaniel"
        }
        create(newMessage);
        setText('');
    }

    const onScroll = useCallback(
        throttle(({ scrollTop, scrollContainerRect }) => {
            setScrollContainerRect(scrollContainerRect);
            setScrollTop(scrollTop);
        }, 1200),
        [setScrollContainerRect, setScrollTop]
    );

    const onMount = useCallback(
        ref => {
            setScrollContainerRect(ref.getBoundingClientRect());
        },
        [setScrollContainerRect]
    );

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
                console.log(textSearch);
                const currentInterval = setTimeout(() => {
                    apiCall(textSearch, page);
                }, 600);
                setInterval(currentInterval);
            }
        }
        else {
            setResult([]);
        }
    }

    const appendItems = () => {
        setPage(page + 1);
        searchGif();
    }

    return (
        <form>
            {result  && <ImageCarousel gifs={result}> </ImageCarousel> }
            {/*<ScrollContainer onScroll={onScroll} onMount={onMount}>*/}
            {/*    <LazyLoader*/}
            {/*        scrollTop={scrollTop}*/}
            {/*        scrollContainerRect={scrollContainerRect}*/}
            {/*        onIntersection={appendItems}*/}
            {/*    >*/}
            {/*        <ImageCarousel  items={result} />*/}
            {/*    </LazyLoader>*/}
            {/*</ScrollContainer>*/}
            {/* && <ImageCarousel gifs={result} />*/}
            {/*<ScroolContainer onScroll={onScroll} children= >*/}
            {/*     onMount={onMount}/>}>*/}
            {/*</ScroolContainer>*/}
            <InputLine
                type="text"
                placeholder="Напишите сообщение..."
                value={text}
                onChange={e => searchGif(e)}

            />
            <SendButton onClick={addNewMessage} />
        </form>
    );
};

export default MessageInputForm;