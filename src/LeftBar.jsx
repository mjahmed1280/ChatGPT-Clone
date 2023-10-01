import React from 'react'
import {Button, ButtonGroup, Card,ListGroup, Form} from 'react-bootstrap';
import { FaBeer, FaUser } from 'react-icons/fa';
import { TbLetterJ } from "react-icons/tb";

function LeftBar() {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <ButtonGroup className='w-100'>
            <Button variant='outline-dark'className='w-100 m-1'>+ New Chat</Button>
            <Button variant='outline-dark'className='w-50 m-1'>#</Button>
        </ButtonGroup>
        <div>
        </div>
        <div>
        <Card style={{  }}>
        <ListGroup variant="dark">
            <ListGroup.Item>Chat History</ListGroup.Item>
            <ListGroup.Item>Chat History </ListGroup.Item>
            <ListGroup.Item>Chat History</ListGroup.Item>
            <ListGroup.Item>Chat History</ListGroup.Item>
            <ListGroup.Item>Chat History</ListGroup.Item>
            <ListGroup.Item>Chat History</ListGroup.Item>
        </ListGroup>
        </Card>
        </div>

        <div style={{marginTop:"80%"}}>        
            <Card>
            <Card.Body>
                <Card.Text><Button variant='outline-dark' className='w-100'>Upgrdae to Plus</Button></Card.Text>
                 <Card.Text> <Button variant='outline-dark' className=''> <TbLetterJ /> </Button>     Jack Ahmed</Card.Text>
            
            </Card.Body>
            </Card>
        </div>

    </div>

    
  )
}

export default LeftBar