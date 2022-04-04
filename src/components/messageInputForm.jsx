import React, {useState} from 'react';
import InputLine from "./UI/input/inputLine";
import SendButton from "./UI/button/sendButton";


const MessageInputForm = ({create}) => {
    const [text, setText] = useState('');

    const addNewMessage = (e) => {
        e.preventDefault();

        const newMessage = {
            text,
            userName: "Nathaniel"
        }
        create(newMessage);
        setText('');
    }

    return (
        <div>
            <form >
                <InputLine
                    type="text"
                    placeholder="Напишите сообщение..."
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <SendButton onClick={addNewMessage} />
            </form>
        </div>
    );
};

export default MessageInputForm;