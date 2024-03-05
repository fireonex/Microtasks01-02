import React, {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    TitleCallback: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {


    const onClickButtonHandler = () => {
        props.TitleCallback(title)
        setTitle('');
    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    let [title, setTitle] = useState('')

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
};
//по нажатию на кнопку title должен отправиться в глобальный стейт (let [message...)
//по нажатию на кнопку должна прозвониться функция
// TitleCallbackFunction, которая консолит что я попал в функцию