import React, {ChangeEvent, MouseEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (inputValue: string) => void
}

const FullInput = (props: FullInputPropsType) => {
    let [inputValue, setInputValue] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
    }

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        props.addMessage(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input value={inputValue} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

export default FullInput;


