import React, { useRef, useCallback } from "react";
import { useMount } from "react-use";
import ImageCarousel from "./ImageCarousel";
import styled from "styled-components";

const Container = styled.div`
  border: 4px solid blue;
`;
const Bottom = styled.div`
  border: 2px solid yellowgreen;
`;


const ScrollContainer = ({ children, onScroll, onMount }) => {
    const containerRef = useRef(null);

    useMount(() => {
        onMount(containerRef.current);
    });

    const handleScroll = useCallback(
        event => {
            const { target } = event;
            const scrollContainerRect = target.getBoundingClientRect();
            const scrollTop = target.scrollTop;

            onScroll({ scrollTop, scrollContainerRect });
        },
        [onScroll]
    );

    return (
        <Container onScroll={handleScroll} ref={containerRef}>
            {children}
        </Container>
    );
};

export default ScrollContainer;
