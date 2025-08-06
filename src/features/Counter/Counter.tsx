import { Button } from "../../common/components/Button/Button"

type TCounter  = {
    screenValue : number ,
    maxValue: number,
    incHandler: () => void,
    resetHandler: () => void  
    setHandler: () => void
}

export const Counter = ({screenValue, maxValue, incHandler, resetHandler, setHandler} : TCounter) => {
    const stopCounting = screenValue === maxValue;

    return(
        <div className="container">
            <div className="screen" style={{color: stopCounting ? 'red' : '#f39c12'}}>{screenValue}</div>
            <div className="buttonsSection">
                <Button isDisabled={stopCounting} name="inc" clickHandler={incHandler}/>
                <Button name="reset" clickHandler={resetHandler}/>
                <Button name="set" clickHandler={setHandler}/>
            </div>
        </div>
    )
}