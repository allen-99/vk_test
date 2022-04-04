import React from 'react';
import classes from "./sendButton.module.css";


const SendButton = (props) => {
    return (
        <button {...props}  className={classes.justButton}>
            +
        </button>
    );
};

export default SendButton;