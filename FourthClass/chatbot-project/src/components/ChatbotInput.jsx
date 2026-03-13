import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import LoadingSpinnerGif from '../assets/loading-spinner.gif';
import './chatbotInput.css'



function ChatbotInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(
  <img src={LoadingSpinnerGif} 
  className="loading-spinner" 
  />);

  function saveInputText(event){
    setInputText(event.target.value);
  }
  
  async function sendMesssage(){
    
    const currentTime = dayjs().format('h:mma');
    // const time = dayjs().valueOf();
    // console.log(currentTime);
    

    const newChatMessages = [
      ...chatMessages, {
        message: inputText,
        sender: 'user',
        time: dayjs().format('h:mma'),
        id : crypto.randomUUID()
      }
    ]

    setInputText('');
    setChatMessages(newChatMessages);

    // setChatMessages([
    //   ...newChatMessages, {
    //     message: isLoading,
    //     sender: 'robot',
    //     id : crypto.randomUUID()
    //   }
    // ])

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages, {
        message: response,
        sender: 'robot',
        time: currentTime,
        id : crypto.randomUUID()
      }
    ])
  }

  function keyEvent(event){
    event.key === 'Enter' && sendMesssage();
    event.key === 'Escape' && setInputText('');
  }

  function clearMessages(){
    // localStorage.setItem('messages', JSON.stringify([]));
    setChatMessages([])
  }

  return(
    <div className="chat-input-container">
      <input 
        placeholder="Send a message to Chatbot" 
        size="30" 
        onChange={saveInputText}
        onKeyDown={keyEvent}
        value={inputText}
        className="chat-input"
      />
      <button 
        onClick={sendMesssage}
        className="send-button"
      >Send</button>
      <button 
        onClick={clearMessages}
        className="clear-button"
      >Clear</button>
    </div>
  );
};



export default ChatbotInput;