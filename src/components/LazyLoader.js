import React, { useState, useEffect, useRef } from "react";
import ImageCarousel from "./ImageCarousel";



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
        <ImageCarousel>
            {children}
            <div style={'border: 2px solid yellowgreen'} ref={fakeBottomRef} />
        </ImageCarousel>
    );
};

export default LazyLoader;
