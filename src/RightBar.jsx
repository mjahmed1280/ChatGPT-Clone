import {React, useEffect, useState, createContext, useContext} from 'react'
import {Button, ButtonGroup, Card,ListGroup, Form, Row, Col} from 'react-bootstrap';
import { BsFillLightningChargeFill } from "react-icons/bs";
// import { IoSparklesSharp } from "react-icons/io";
import { TbSparkles } from "react-icons/tb";
import Popmodel from './Popmodel';
import { useMyContext } from './MyContext';

function RightBar() {
  const { isButtonClicked, toggleButton } = useMyContext();
  const [ gayab, setGayab] = useState(true);
  const [input, SetInput] = useState("hello Jakria");
  const [inputArr , setInputArr] = useState([])
  const [modalShow, setModalShow] = useState(false);

  console.log("Context button: "+ isButtonClicked);

  useEffect(() => {
    if (isButtonClicked) {
      setGayab(false);
    } else {
      setGayab(true);
    }
  }, [isButtonClicked]);
  
  return (
    <div className='parent'  style={{minHeight:"90%"}}>
      <br />
      <ButtonGroup >
        <Button variant='success'><h2><BsFillLightningChargeFill />GPT-3.5</h2></Button>
        <Button variant='outline-secondary' onClick={() => setModalShow(true)} ><h2><TbSparkles /> GPT-4</h2></Button>
      </ButtonGroup>

      {/* // an i for an i makes the whole world -ve */}

      <Popmodel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    <br />
    <br />
    

    {gayab && <h1 className='text-secondary' id='gayab0' >Chat GPT</h1>}
    
    { !gayab && <div className="chatBox border border-dark" style={{minHeight:"400px"}} >
      <h1>Response</h1>
    </div> }
 
    {gayab && <Col style={{position:"fixed", bottom: "120px", left:"50%",  alignItems:"center"}}>

        <Button variant='secondary' className='m-1 p-3'>Sample GPT promt 1</Button>
        <Button variant='secondary' className='m-1 p-3'>Sample GPt promt 2</Button>
      <br />
        <Button variant='secondary' className='m-1 p-3'>Sample GPT promt 3</Button>
        <Button variant='secondary' className='m-1 p-3'>Sample GPT promt 4</Button>
      </Col> 
    }
     
<Button variant='outline-secondary' style={{position:"fixed", bottom:"20px", width:"60%"}} className=' ' id='gayab1'>
    <form action="submit" onSubmit={
          (e) => {
            e.preventDefault();
          setGayab(false);
          SetInput("");
          console.log(gayab);
          console.log(input);
                }
    }>
  
      <input type="text" name="sb" value={input} 
      onChange={(e) => SetInput(e.target.value)}
      className='' 
      style={{
          width:"80%", background:"white", color:"black",height:"40px",
          position:"relative" 
          
          }}/>

      <Button type='submit' variant='primary'>success</Button>
    </form>

      </Button>

      <label >
        Your promt must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </label>

    
    </div>
  )
}

export default RightBar