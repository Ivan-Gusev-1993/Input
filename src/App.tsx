import React, {useState} from 'react';
import './App.css';
import FullInput from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

const App = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [inputValue, setInputValue] = useState('')

    const addMessage = (inputValue: string) => {
        let newMessage = {message: inputValue}
        setMessage([newMessage, ...message])
    }

    const onClickButtonHandler = () => {
        addMessage(inputValue)
        setInputValue('')
    }

    //(for component: FullInput)
    // const addMessage = (inputValue: string) => {
    //     let newMessage = {message: inputValue}
    //     setMessage([newMessage, ...message])
    // }

    return (
        <div className={'App'}>
            <Input inputValue={inputValue} setInputValue={setInputValue}/>
            <Button callBack={onClickButtonHandler} name={'+'}/>

            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}

        </div>
    )
}

export default App;