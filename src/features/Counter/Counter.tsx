import { useDispatch, useSelector } from "react-redux"
import { Button } from "../../common/components/Button/Button"
import type { AppDispatch, RootState } from "../../app/store"
import { maxValueSelector } from "../../app/maxValue-selector"
import { screenValueSelector } from "../../app/screenValue-selector"
import { changeScreenValueAC } from "../../app/app-reducer"
import { minValueSelector } from "../../app/minValue-selector"

type TCounter  = { 
    setHandler: () => void
}

export const Counter = ({ setHandler} : TCounter) => {
    const maxValue = useSelector<RootState, number>(maxValueSelector);
    const minValue = useSelector<RootState, number>(minValueSelector);
    let screenValue = useSelector<RootState, number>(screenValueSelector);

    const dispatch = useDispatch<AppDispatch>()

    const stopCounting = screenValue === maxValue;
    const isResetDisabled = screenValue === minValue;

    function incHandler() {
        dispatch(changeScreenValueAC(screenValue + 1));
    }

    function resetHandler() {
        dispatch(changeScreenValueAC(minValue));
    }

    return(
        <div className="container">
            <div className="screen" style={{color: stopCounting ? 'red' : '#f39c12'}}>{screenValue}</div>
            <div className="buttonsSection">
                <Button isDisabled={stopCounting} name="inc" clickHandler={incHandler}/>
                <Button isDisabled={isResetDisabled} name="reset" clickHandler={resetHandler}/>
                <Button name="set" clickHandler={setHandler}/>
            </div>
        </div>
    )
}