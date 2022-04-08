import React from 'react';
import classes from './messageItem.module.css';


const MessageItem = ({message}) => {
    if (message.gif == '-') {
        return (
            <div className="Message">
                <div className={classes.Message}>
                    <div className={classes.MessageTitle}>
                        <div className={classes.UserName}> {message.userName} </div>
                        <div className={classes.MessageTime}> {message.hours} : {message.minutes}</div>
                    </div>
                    <div className={classes.MessageContent}>
                        <div className="MessageText"> {message.text} </div>
                    </div>

                </div>
            </div>
        );
    }
    return (
        <div className="Message">
            <div className={classes.Message}>
                <div className={classes.MessageTitle}>
                    <div className={classes.UserName}> {message.userName} </div>
                    <div className={classes.MessageTime}> {message.hours} : {message.minutes}</div>
                </div>
                <div className={classes.MessageContent}>
                    <div className="MessageText"> {message.text} </div>
                    <img className={classes.MessageAttachments} src={message.gif} />
                </div>

            </div>
        </div>
    );
};

export default MessageItem;