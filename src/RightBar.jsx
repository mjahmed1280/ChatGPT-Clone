import React, { useEffect, useState, createContext, useContext } from 'react';
import { Button, ButtonGroup, Card, ListGroup, Form, Row, Col } from 'react-bootstrap';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbSparkles } from "react-icons/tb";
import Popmodel from './Popmodel';
import { useMyContext } from './MyContext';
import ChatBot from './UserRes';

function RightBar() {
  const { isButtonClicked, toggleButton } = useMyContext();
  const [gayab, setGayab] = useState(true);
  const [input, setInput] = useState(""); // State to store user input
  const [isinput, issetInput] = useState(""); // State to store user input
  const [modalShow, setModalShow] = useState(false);
  const [sendClicked, setSendClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked) {
      setGayab(false);
    } else {
      setGayab(true);
    }
  }, [isButtonClicked]);

  const userMsgSender = async(e) => {
     issetInput(input)
     setGayab(false);
  }

    function toggle()
   {
     setInput("");
     issetInput("")
   }

  
  return (
    <div className='parent' style={{ minHeight: "90%" }}>
      <br />
      <ButtonGroup>
        <Button variant='success'><h2><BsFillLightningChargeFill />GPT-3.5</h2></Button>
        <Button variant='outline-secondary' onClick={() => setModalShow(true)}><h2><TbSparkles /> GPT-4</h2></Button>
      </ButtonGroup>

      <Popmodel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <br />
      <br />

      {gayab && <h1 className='text-secondary' id='gayab0' >Chat GPT</h1>}

      {!gayab && 
        <div className="chatBox border border-dark" style={{ minHeight: "400px", height: "70vh" }}>
          {/* <h1> Response </h1> */}
          {<ChatBot toggle={toggle} input={isinput} />}
        </div>
      }

      {gayab && (
        <Col style={{ position: "fixed", bottom: "120px", left: "50%", alignItems: "center" }}>
          <Button variant='secondary' className='m-1 p-3'>Sample GPT prompt 1</Button>
          <Button variant='secondary' className='m-1 p-3'>Sample GPT prompt 2</Button>
          <br />
          <Button variant='secondary' className='m-1 p-3'>Sample GPT prompt 3</Button>
          <Button variant='secondary' className='m-1 p-3'>Sample GPT prompt 4</Button>
        </Col> )
      }

      <div variant='outline-secondary' style={{ position: "fixed", bottom: "20px", width: "60%" }} className=' ' id='gayab1'>
       
          <div className="chat-input " style={{ display: 'flex', alignSelf: 'flex-end', width: '100%', background:"white", color:"white" }} >
            <input
              type="text"
              value={input}
              onChange={(e) =>  setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ width: '80%', padding: '4px',background:"white", color:"black"  }}
            />
            <Button type='submit' variant='success' onClick={userMsgSender} style={{ width: '20%', padding: '4px' }}>Send</Button>
          </div>
      
      </div>

      <label >
        Your prompt must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </label>
    </div>
  )
}

export default RightBar;
