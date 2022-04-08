import {useState} from "react";
import classes from './App.css';

import MessageList from "./components/messageList";
import MessageInputForm from "./components/messageInputForm";

function App() {

    const [messages, setMessages] = useState([{text:"один два три четыре пять шесть семь восемь девять",
                                                        userName: "Nathaniel",
                                                        hours: '12',
                                                        minutes: '45'}])

    const createMessage = (newMessage) => {
        if (newMessage.text !== '' || (newMessage.text === '' && newMessage.gif !== '-')) {
            setMessages([...messages, newMessage]);
        }}

      return (
        <div className="App">
            <div className="Chat">
                    <MessageList messages={messages} userName={"Nathaniel"} />
                <div className="InputBlock">
                    <MessageInputForm  className='inputForm'
                                       create={createMessage}
                    />
                </div>
            </div>
        </div>
      );
    }

export default App;
