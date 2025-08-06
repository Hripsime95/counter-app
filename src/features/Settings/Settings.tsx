import { useState, type ChangeEvent } from "react";
import { Button } from "../../common/components/Button/Button"

type TCounter  = {
    maxValue : number,
    minValue : number,
    setHandler: (maxValue: number, minValue: number) => void 
}

const correctInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (
        e.currentTarget.value.length > 1 &&
        e.currentTarget.value.startsWith('0') &&
        !e.currentTarget.value.startsWith('0.')
    ) {
        return e.currentTarget.value.replace(/^0+/, '')
    }
    return e.currentTarget.value
}

export const Settings = ({maxValue, minValue, setHandler} : TCounter) => {
    const [max, setMax] = useState<number>(maxValue);
    const [min, setMin] = useState<number>(minValue);
    const [err, setError] = useState<boolean>(maxValue <= minValue);

    function onMaxChange(e: ChangeEvent<HTMLInputElement>) {
        e.currentTarget.value = correctInputValue(e);
        
        const newMaxValue = +e.currentTarget.value;
        setMax(newMaxValue);
        setError(min >= newMaxValue || newMaxValue < 0);
    }

    function onMinChange(e: ChangeEvent<HTMLInputElement>) {
        e.currentTarget.value = correctInputValue(e);
        
        const newMinValue = +e.currentTarget.value;
        setMin(newMinValue);
        setError( newMinValue >= max || newMinValue < 0);
    }

    return(
        <div className="container">
            <div className="">
                <div className="input">
                    <span>max value :</span>
                    <input className={err ? "error": ''} type="number" value={max} onChange={onMaxChange}/>
                </div>
                <div className="input">
                    <span>min value :</span>
                    <input className={err ? "error": ''} type="number" value={min} onChange={onMinChange}/>
                </div>
            </div>
            <div className="buttonsSection">
                <Button name="set" clickHandler={() => setHandler(max, min)}/>
            </div>
        </div>
    )
}