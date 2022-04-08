import React, { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCarousel";
import styled from "styled-components";

const Container = styled.div`
  border: 4px solid blue;
`;
const Bottom = styled.div`
  border: 2px solid yellowgreen;
`;


const LazyLoader = ({
                        scrollTop,
                        rootBottomMargin = 0,
                        scrollContainerRect,
                        onIntersection,
                        children
                    }) => {
    const [scrollThreshold, setScrollThreshold] = useState(0);
    const fakeBottomRef = useRef(null);
    const fakeListRect = fakeBottomRef.current
        ? fakeBottomRef.current.getBoundingClientRect()
        : {};

    useEffect(() => {
        setScrollThreshold(
            fakeListRect.top - scrollContainerRect.top - scrollContainerRect.height
        );
    }, [scrollTop, scrollContainerRect, fakeListRect.top]);

    useEffect(() => {
        if (scrollThreshold < rootBottomMargin) {
            onIntersection();
        }
    }, [scrollThreshold, rootBottomMargin, onIntersection]);

    return (
        <Container>
            {children}
            <Bottom ref={fakeBottomRef} />
        </Container>
    );
};

export default LazyLoader;
