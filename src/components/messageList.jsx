import React from 'react';
import {CSSTransition} from "react-transition-group";
import MessageItem from "./UI/MessageItem/messageItem";
import cl from ".//UI/App.module.css"

const MessageList = ({messages, userName}) => {

    return (
        <div className={cl.MessageList} id="forScroll">
            {messages.map((message) =>
                <CSSTransition
                    key={message.id}
                    timeout={500}
                    classNames="Message"
                >
                    <MessageItem message={{
                        text: message.text,
                        userName:userName,
                        gif: message.gif,
                        hours: message.hours,
                        minutes: message.minutes}}/>
                </CSSTransition>
            )}
        </div>
    );
};

export default MessageList;