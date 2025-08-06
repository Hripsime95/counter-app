import { useEffect, useState } from 'react'
import { Counter } from '../features/Counter/Counter'
import { Settings } from '../features/Settings/Settings'
import './App.css'
import { maxValueSelector } from './maxValue-selector'
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store'
import { minValueSelector } from './minValue-selector'
import { changeMaxValueAC, changeMinValueAC } from './app-reducer'

function App() {

  const maxValue = useSelector<RootState, number>(maxValueSelector);
  const minValue = useSelector<RootState, number>(minValueSelector);

  const dispatch = useDispatch<AppDispatch>();

  const [value, setValue] = useState<number>(minValue);
  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(true);

  useEffect(() => { setValue(minValue) }, [minValue])

  function incremetValue(){
    setValue(value + 1);
  }

  function resetValue () {
    setValue(minValue);
  }

  function saveValuesInStore(newMaxValue: number, newMinValue: number) {
    dispatch(changeMaxValueAC(newMaxValue));
    dispatch(changeMinValueAC(newMinValue));
    setIsSettingOpen(false);
  }

  function openSettings() {
    setIsSettingOpen(true)
  }

  return (
    <div className='page'>
      { isSettingOpen 
        ? <Settings 
            maxValue={maxValue} 
            minValue={minValue} 
            setHandler={saveValuesInStore}>
          </Settings> 
        : <Counter 
            screenValue={value} 
            maxValue={maxValue} 
            incHandler={incremetValue} 
            resetHandler={resetValue} 
            setHandler={openSettings}/>
      } 
    </div>
  )
}

export default App
