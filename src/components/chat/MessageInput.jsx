// src/components/chat/MessageInput.jsx
import { useState } from 'react';

export default function MessageInput({ onSendMessage }) {
 const [message, setMessage] = useState('');

 const handleSubmit = (e) => {
   e.preventDefault();
   if (message.trim()) {
     onSendMessage(message);
     setMessage('');
   }
 };

 return (
   <form onSubmit={handleSubmit}>
     <input
       type="text"
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       placeholder="Type your message..."
     />
     <button type="submit">Send</button>
     <style>{`
       form {
         display: flex;
         gap: 10px;
       }
       input {
         flex: 1;
         padding: 8px;
       }
       button {
         padding: 8px 16px;
       }
     `}</style>
   </form>
 );
}