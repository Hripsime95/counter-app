import { useState } from 'react'
import { Counter } from '../features/Counter/Counter'
import { Settings } from '../features/Settings/Settings'
import './App.css'

function App() {

  const [isSettingOpen, setIsSettingOpen] = useState<boolean>(true);

  return (
    <div className='page'>
      { isSettingOpen 
        ? <Settings closeSettings={() => setIsSettingOpen(false)}/>
        : <Counter setHandler={() => setIsSettingOpen(true)}/>
      } 
    </div>
  )
}

export default App
