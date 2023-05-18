import React, { useEffect, useRef, useState, useContext } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import { UserContext } from '../userContext'
import { useParams } from 'react-router-dom';
import useSocket from '../hooks/useSocket';

const Chat = () => 
{

    const { authToken, setAuthToken, id, setId } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const socketRef = useRef(null);
    const  chat_id  = useParams();
    const socket = useSocket(chat_id.id); // Obtiene la instancia del socket WebSocket
    
  

    
    useEffect(() => {
      if (socket) {
        // Conexión al WebSocket cuando el componente se monta
        socket.connect();
  
        // Manejador de eventos para recibir mensajes del WebSocket
        socket.onMessage((event) => {
            
          // Maneja los mensajes recibidos del WebSocket
          const data = JSON.parse(event.data);
          console.log(data)
            if (data.type === 'load_messages') {

            // Actualiza la lista de mensajes cuando se recibe la carga inicial de mensajes
            setMessages(data.messages);
            
            }else if (data.type === 'chat.messages') {
                console.log(data.type)
                // Agrega el nuevo mensaje a la lista de mensajes existentes
                setMessages((prevMessages) => [...prevMessages, data.content]);
                console.log(data.content)
            }
      
        });
  
        return () => {
          // Desconexión del WebSocket cuando el componente se desmonta
          socket.disconnect();
        };
      }
    }, [socket]);

     // Efecto adicional para reconectar en caso de desconexión
  useEffect(() => {
    if (socket) {
      const handleSocketClose = () => {
        console.log('Conexión WebSocket cerrada. Intentando reconectar...');
        const reconnectInterval = setInterval(() => {
          if (socketRef.current && socketRef.current.readyState === 3) {
            socket.connect();
          } else {
            clearInterval(reconnectInterval);
          }
        }, 5000);
      };

      const handleSocketError = (error) => {
        console.log('Error en la conexión WebSocket. Reconectando...');
        socket.connect();
      };

      socket.onClose(handleSocketClose);
      socket.onError(handleSocketError);

      return () => {
        socket.offClose(handleSocketClose);
        socket.offError(handleSocketError);
      };
    }
  }, [socket]);
    


    return (
        <div>
        <h1>Chat Component</h1>
        
        {/* Renderizar los mensajes */}
        {messages.map((message) => (
            
            <div key={message.id}>
            <span>{message.sender} </span>
            <span>{message.content}</span>
            <span>{message.created_at}</span>
            </div>
        ))}

        {/* Formulario para enviar mensajes */}
        <form
            onSubmit={(e) => {
            e.preventDefault();
            const content = e.target.message.value;
            handleSendMessage(content)

            e.target.message.value = '';

            }}

        >
            <input type="text" name="message" placeholder="Enter your message"   />
            <button type="submit">Send</button>
        </form>
        </div>
    );
};

export default Chat;