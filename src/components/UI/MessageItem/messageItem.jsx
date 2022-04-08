import React from 'react';
import classes from './messageItem.module.css';


const MessageItem = ({message}) => {
    //message.date.getHours()}:{message.date.getMinutes()
    console.log(message.date)
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
                    <div className={classes.MessageTime}> {message.date}</div>
                </div>
                <div className={classes.MessageContent}>
                    <div className="MessageText"> {message.text} </div>
                    <img className="MessageAttachments" src={message.gif} />
                </div>

            </div>
        </div>
    );
};

export default MessageItem;