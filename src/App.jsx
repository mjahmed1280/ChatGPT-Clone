import {React, useEffect, useState, createContext, useContext} from 'react'
import './App.css'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import { MyProvider } from './MyContext';;

function App() {
  // const [count, setCount] = useState(0)

  return (
     
    <>
    <MyProvider>
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
      
       </MyProvider>
      </>
  )
}

export default App
