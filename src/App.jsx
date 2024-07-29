import { useState } from 'react'
import Left from "./conponent/left/Left.jsx"
import Right from "./conponent/right/Right.jsx"

import './App.css'

function App() {
  const [flag, setFlag] = useState(false)

  const [ovo, setOvo] = useState(false)

  const [active, setActive] = useState(null)
  
  const [audios, setAudios] = useState(null)
  
  return (
    <>
      <div className='BOX'>
      
        <div className='inBOX'>

          <Left className='leftBOX' setname = {setActive} setOvo={setOvo} ovo={ovo} setFlag={setFlag} flag={flag} setAudios={setAudios} audios={audios}/>

          <Right className='rightBOX' Active={active} setOvo={setOvo} ovo={ovo} setFlag={setFlag} flag={flag} audios={audios}/>

        </div>

      </div>
    </>
  )
}

export default App
