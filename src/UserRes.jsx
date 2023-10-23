import React, { useEffect, useState } from 'react';

const ChatBot = ({ input ,toggle}) => {
  const genericResponses = ["Ok, got it.", "We will get back to you.", "Thanks for your message.", "How can I assist you?", "I'm here to help."];
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
 
  useEffect(() => {
    // Trigger handleUserMessage when input prop is passed
    if (input) {
      console.log("i am called");
      handleUserMessage();
    }
  }, [input]);


  const handleUserMessage = () => {
    const randomResponse = genericResponses[Math.floor(Math.random() * genericResponses.length)];
    const newMessages = [
      ...messages,
      { text: input, isUser: true },
      { text: randomResponse, isUser: false },
    ];
    setMessages(newMessages);
    toggle(); // Call toggle after setting messages
    
  };

  return (
    <div className="chat-bot" >
      <div className="chat-messages"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '500px',
          overflowY: 'scroll',  // Enable vertical scrolling
          overflowX: 'hidden',  // Hide horizontal scrolling
        }}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: '8px',
              margin: '4px',
              borderRadius: '8px',
              maxWidth: '70%',
              backgroundColor: message.isUser ? 'lightblue' : 'lightgray',
              alignSelf: message.isUser ? 'flex-end' : 'flex-start',
            }}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input" style={{ display: 'flex', alignSelf: 'flex-end', width: '100%' }}>
        {/* <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '80%', padding: '4px' }}
        />
        <button onClick={() => handleUserMessage(userMessage)} style={{ width: '20%', padding: '4px' }}>Send</button> */}
      </div>
    </div>
  );
};

export default ChatBot;
