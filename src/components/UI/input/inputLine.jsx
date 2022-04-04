import React from 'react';
import classes from "./inputLine.module.css";


const InputLine = React.forwardRef((props, ref) => {
    return (
        <input ref={ref}
               className={classes.myInput}
               {...props}
        />
    );
});

export default InputLine;