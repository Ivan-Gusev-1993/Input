import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setInputValue: (inputValue: string) => void
    inputValue: string
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.currentTarget.value)
    }
    return (
        <input value={props.inputValue} onChange={onChangeInputHandler}/>
    );
};

