// src/components/chat/MessageList.jsx
import { useEffect, useRef } from 'react';

export default function MessageList({ messages }) {
 const messagesEndRef = useRef(null);

 useEffect(() => {
   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
 }, [messages]);

 return (
   <div className="messages">
     {messages.map((msg) => (
       <div key={msg.id} className="message">
         <strong>{msg.user?.name || 'Unknown'}:</strong> {msg.text}
       </div>
     ))}
     <div ref={messagesEndRef} />
     <style>{`
       .messages {
         height: 400px;
         overflow-y: auto;
         border: 1px solid #ccc;
         padding: 10px;
         margin-bottom: 20px;
       }
       .message {
         margin-bottom: 10px;
       }
     `}</style>
   </div>
 );
}