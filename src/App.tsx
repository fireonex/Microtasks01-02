import React, {useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let [title, setTitle] = useState('')


    const callBackButtonHandler = () => {
        TitleCallbackFunction(title)
        setTitle('')
    }

    const TitleCallbackFunction = (title: string) => {
        let newMessage = {message: title};
            setMessage([newMessage, ...message])
    }


    return (
        <div className="App">
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}


export default App;
