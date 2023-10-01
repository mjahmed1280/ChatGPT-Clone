import { useState } from 'react'
import './App.css'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='bade-papa'>
      {/* <div className=''>dfvd </div> */}
        
        <div className="history-bar border border-dark"> 
        {/* <div className="">  */}
        <LeftBar></LeftBar>
        {/* </div> */}
        </div>

        <div className="chat-record">
        <RightBar></RightBar>
        </div>
      
      </div>
      
    </>
  )
}

export default App
