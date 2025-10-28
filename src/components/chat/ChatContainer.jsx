// src/components/chat/ChatContainer.jsx
import { useState, useEffect } from 'react';

import { supabase } from '../../lib/supabase';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

export default function ChatContainer() {
 const [client, setClient] = useState(null);
 const [channel, setChannel] = useState(null);
 const [messages, setMessages] = useState([]);
 const [loading, setLoading] = useState(true);
 const [username, setUsername] = useState('');
 const [isConnected, setIsConnected] = useState(false);

 const connectToChat = async (e) => {
   e.preventDefault();
   setLoading(true);
   try {
     const chatClient = supabase.getInstance();
     //const chatClient = StreamChat.getInstance(import.meta.env.PUBLIC_STREAM_KEY);

     await chatClient.connectUser(
       {
         id: username,
         name: username,
         image: `https://stevehora.com/favicon.svg`,
       },
       chatClient.devToken(username)
     );

     const channel = chatClient.channel('messaging', 'astro-channel', {
       name: 'Astro Channel',
       members: [username],
     });

     await channel.watch();

     channel.on('message.new', (event) => {
       setMessages(prev => [...prev, event.message]);
     });

     setClient(chatClient);
     setChannel(channel);
     setMessages(channel.state.messages);
     setIsConnected(true);
   } catch (error) {
     console.error('Error initializing chat:', error);
   } finally {
     setLoading(false);
   }
 };

 useEffect(() => {
   return () => {
     if (client) {
       client.disconnectUser();
     }
   };
 }, [client]);

 const sendMessage = async (text) => {
   if (channel) {
     await channel.sendMessage({
       text,
       user_id: username,
     });
   }
 };

 if (loading && isConnected) {
   return <div>Loading chat...</div>;
 }

 if (!isConnected) {
   return (
     <div className="chat-container">
       <form onSubmit={connectToChat}>
         <input
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           placeholder="Enter your username"
           required
         />
         <button type="submit">Join Chat</button>
       </form>
       <style>{`
        //  .chat-container {
        //    max-width: 600px;
        //    margin: 0 auto;
        //    padding: 20px;
        //  }
         form {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          padding: 2.1rem;
          border: 0px solid #ccc;
          border-radius: 5px;
          width: 10.0rem;
        }

        input[type="text"] {
          padding: 0.05rem;
          border: 1px solid #eee;
          border-radius: 5px;
          width: 13.0rem;
        }

        button[type="submit"] {
          background-color: #007bff;
          color: white;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
       `}</style>
     </div>
   );
 }

 return (
   <div className="chat-container">
     <MessageList messages={messages} client:visible />
     <MessageInput onSendMessage={sendMessage} client:idle />
     <style>{`
       .chat-container {
         max-width: 600px;
         margin: 0 auto;
         padding: 20px;
       }
      form {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 22.0rem;
      }

      input[type="text"] {
        padding: 0.05rem;
        border: 1px solid #eee;
        border-radius: 5px;
        width: 20rem;
      }

      button[type="submit"] {
        background-color: #007bff;
        color: white;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
     `}</style>
   </div>
 );
}