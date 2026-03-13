import ChatMessage from './ChatMessage'
import { useAutoScroll } from '../library/useAutoScroll';
import './ChatMessages.css';


function ChatMessages({chatMessages}){
  const chatMessageRef = useAutoScroll(chatMessages);

  return(
    <div 
      className="chat-massage-container"
      ref={chatMessageRef}
    >
      {
        chatMessages.map((chatMessage)=>{
          return(
            <ChatMessage 
              message={chatMessage.message}
              sender={chatMessage.sender}
              time={chatMessage.time}
              key={chatMessage.id} 
            />
          );
        })
      }
    </div>
  )
}


export default ChatMessages;