import { useState, type ChangeEvent } from "react";

type TInput = {
    label: string,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    initValue: number,
    err?: boolean, 
}

export const Input = (props: TInput) => {
    const {label, err, onChangeHandler, initValue} = props;

    return (
        <div className="input">
            <label> {label}
                <input className={err ? "error": ''}
                    type="number" 
                    value={initValue} 
                    onChange={onChangeHandler}/>
            </label>
        </div>
    )
}