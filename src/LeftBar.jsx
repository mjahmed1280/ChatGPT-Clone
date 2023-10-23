import React from 'react';
import { Button, ButtonGroup, Card, ListGroup } from 'react-bootstrap';
import { FaBeer, FaUser } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon
import { useMyContext } from './MyContext';

function LeftBar() {
    const { toggleButton } = useMyContext();

    const openGitHubRepo = () => {
        window.open("https://github.com/mjahmed1280/ChatGPT-Clone", "_blank");
    };

    const openGitHubProfile = () => {
        window.open("https://github.com/mjahmed1280", "_blank");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <ButtonGroup className='w-100'>
                <Button variant='outline-dark' className='w-100 m-1' onClick={toggleButton}>+ New Chat</Button>
                <Button variant='outline-dark' className='w-50 m-1' onClick={openGitHubProfile}>
                    <FaGithub /> {/* Use the GitHub icon here */}
                </Button>
            </ButtonGroup>
            <div>
            </div>
            <div>
                <Card style={{}}>
                    <ListGroup variant="dark">
                        <ListGroup.Item>Chat History</ListGroup.Item>
                        <ListGroup.Item>Chat History</ListGroup.Item>
                        <ListGroup.Item>Chat History</ListGroup.Item>
                        <ListGroup.Item>Chat History</ListGroup.Item>
                        <ListGroup.Item>Chat History</ListGroup.Item>
                        <ListGroup.Item>Chat History</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>

            <div style={{ marginTop: "80%" }}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <Button variant='outline-dark' className='w-100' onClick={openGitHubRepo}>
                            GitHub Repository
                            </Button>
                        </Card.Text>
                        <Card.Text>
                            <Button variant='outline-dark' className='' onClick={openGitHubProfile}>
                                <FaGithub /> {/* Use the GitHub icon here */}
                                Jakaria Ahmed
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default LeftBar;
