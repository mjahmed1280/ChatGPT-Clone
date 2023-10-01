import {React, useState} from 'react'
import {Button, ButtonGroup, Card,ListGroup, Form, Row, Col} from 'react-bootstrap';
import { BsFillLightningChargeFill } from "react-icons/bs";
// import { IoSparklesSharp } from "react-icons/io";
import { TbSparkles } from "react-icons/tb";
import Popmodel from './Popmodel'

function RightBar() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <br />
      <ButtonGroup>
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

    <h1 className='text-secondary' >Chat GPT</h1>
      <Col style={{marginTop:"28%"}}>

        <Button variant='secondary' className='m-1 p-3'>Sample GPT promt 1</Button>
        <Button variant='secondary' className='m-1 p-3'>Sample GPt promt 2</Button>
      <br />
        <Button variant='secondary' className='m-1 p-3'>Sample GPT promt 3</Button>
        <Button variant='secondary' className='m-1 p-3'>Sample GPT promt 4</Button>
      </Col> 
     
<Button variant='outline-dark' style={{marginTop:"3%"}} className='w-100'>
     <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        
      />
      </Button>

      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>

    
    </div>
  )
}

export default RightBar