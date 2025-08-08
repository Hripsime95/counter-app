import { useState, type ChangeEvent } from "react";
import { Button } from "../../common/components/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { maxValueSelector } from "../../app/maxValue-selector";
import { minValueSelector } from "../../app/minValue-selector";
import { changeIntervalValuesAC } from "../../app/app-reducer";
import { Input } from "../../common/components/Input/Input";

type TSettings = {
    closeSettings: () => void
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

export const Settings = (props: TSettings) => {
    const closeSettings = props.closeSettings;

    const maxValue = useSelector<RootState, number>(maxValueSelector);
    const minValue = useSelector<RootState, number>(minValueSelector);

    const dispatch = useDispatch<AppDispatch>();
    
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

    function setHandler() {
        dispatch(changeIntervalValuesAC({maxValue: max, minValue: min}));
        closeSettings();
    }

    return(
        <div className="container">
            <Input label="Max Value" initValue={max} err={err} onChangeHandler={onMaxChange}/>
            <Input label="Min Value" initValue={min} err={err} onChangeHandler={onMinChange}/>
            <div className="buttonsSection">
                <Button name="set" isDisabled={err} clickHandler={setHandler}/>
            </div>
        </div>
    )
}