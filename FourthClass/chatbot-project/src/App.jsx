import { useState, useEffect } from 'react';
import { Chatbot } from 'supersimpledev';
import ChatbotInput from './components/ChatbotInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App(){
  // const [chatMessages, setChatMessages] = useState([]);
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);



  // const [chatMessages, setChatMessages] = array; // Array destruction

  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  // console.log(chatMessages);


  useEffect(()=>{
    Chatbot.addResponses({
    'is your name': `Shabs Chatbot.`,
    'can i give you a new name': `Thank you, Shabs will be jealous about it.`,
    'okay ok': `Thank you, Do you have anything in mind.`,
  })
  }, []);
  

  useEffect(()=>{
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  // useEffect(() => {
  //   localStorage.setItem('messages', console.log(chatMessages));
  // }, [chatMessages]);
  
  
  
  return(
    <div className="app-container" >

      {chatMessages.length === 0 && <h1>Welcome to the chatbot project! Send a message using the textbox below.</h1>}
      
      <ChatMessages 
        chatMessages={chatMessages} 
      />

      <ChatbotInput
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages}
      />
    </div>
  )
}

export default App
