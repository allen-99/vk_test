import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import MessageItem from "./UI/MessageItem/messageItem";


const MessageList = ({messages, userName}) => {

    return (
        <div>
            {messages.map((message) =>
                <CSSTransition
                    key={message.id}
                    timeout={500}
                    classNames="Message"
                >
                    <MessageItem message={{text: message.text, userName:userName}}  />
                </CSSTransition>
            )}
        </div>
    );
};

export default MessageList;