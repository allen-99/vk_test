import {useState} from "react";
import classes from './App.css';

import MessageList from "./components/messageList";
import MessageInputForm from "./components/messageInputForm";


function App() {

  const [messages, setMessages] = useState([{text:"один два три четыре пять шесть семь восемь девять",
                                                        userName: "Nathaniel"}])

  const createMessage = (newMessage) => {
      setMessages([...messages, newMessage]);
  }

  return (
    <div className="App">
        <MessageInputForm
            create={createMessage}
        />
      <MessageList messages={messages} userName={"Nathaniel"} />
    </div>
  );
}

export default App;
