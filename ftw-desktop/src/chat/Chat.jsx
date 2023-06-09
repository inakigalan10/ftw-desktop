import React, { useEffect, useRef, useState, useContext } from 'react';
import { w3cwebsocket as WebSocket } from 'websocket';
import { UserContext } from '../userContext'
import { useParams } from 'react-router-dom';
import useSocket from '../hooks/useSocket';
import './chat.css';
import { GrSend } from 'react-icons/gr';
import { ChatContext } from '../ChatContext';


const Chat = () => 
{

    const { authToken, setAuthToken, idUser, setIdUser, usernameUser, setUsernameUser, idProfile, setIdProfile, Chat, setChat } = useContext(UserContext);
    const [messages, setMessages] = useState([]);
    const socketRef = useRef(null);
    const  chat_id  = useParams();
    const [otherPersonName, setOtherPersonName] = useState(''); // Variable de estado para almacenar el nombre de la otra persona
    const listadoRef = useRef(null);
    const socket = useSocket(chat_id.id); // Obtiene la instancia del socket WebSocket
    const { chats, setChats } = useContext(ChatContext);


    
    useEffect(() => {
      if (socket) {
        // Conexión al WebSocket cuando el componente se monta
        socket.connect();
  
        // Manejador de eventos para recibir mensajes del WebSocket
        socket.onMessage((event) => {
            
          // Maneja los mensajes recibidos del WebSocket
          const data = JSON.parse(event.data);
         
            if (data.type === 'load_messages') {

            // Actualiza la lista de mensajes cuando se recibe la carga inicial de mensajes
            setMessages(data.messages);
      
            
            }else if (data.type === 'chat.messages') {
               
                // Agrega el nuevo mensaje a la lista de mensajes existentes
                setMessages((prevMessages) => [...prevMessages, data.content]);
                socket.ReadMessage(data.content.message_id);
                
                
            }
      
        });
  
        return () => {
          // Desconexión del WebSocket cuando el componente se desmonta
          socket.disconnect();
        };
      }
    }, [socket]);

    const handleSendMessage = (content) => {
      // Aquí debes implementar la lógica para enviar el mensaje al servidor
      // Puedes utilizar la función `sendMessage` del hook `useSocket`
      socket.sendMessage(content);
    };

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

  useEffect(() => {
    if (messages.length > 0) {
      // Obtener el nombre de la otra persona basado en el primer mensaje
      const firstMessage = messages[0];
      const otherPerson = firstMessage.sender === usernameUser ? firstMessage.receiver : firstMessage.sender;
      setOtherPersonName(otherPerson);
    }
  }, [messages, usernameUser]);
    
  useEffect(() => {
    
    if (listadoRef.current) {
      listadoRef.current.scrollTop = listadoRef.current.scrollHeight;
    }
  }, [messages]);

 
  return (
    <div className='chat'>
      <div className='cabecera-chat'>
        <h1>{otherPersonName}</h1> {/* Mostrar el nombre de la otra persona */}
      </div>
      
        <div className='listado-message' ref={listadoRef} >
          {/* Renderizar los mensajes */}
          {messages.map((message) => (
            
            message.sender === usernameUser ? (
            
              <div key={message.id} className='you'>
                
                <div className='contenido'>
                  <span>{message.content}</span>
                </div>
                <div className='fecha'>
                  <span>{message.created_at}</span>
                </div> 
              </div>
            ) : (
              <div key={message.id} className='other'>
                
                <div className='contenido'>
                  <span>{message.content}</span>
                </div>
                <div className='fecha'>
                  <span>{message.created_at}</span>
                </div> 
              </div>
            )   
          ))}
        </div>
  
        {/* Formulario para enviar mensajes */}
        <div className='enviar-mensaje'>
          <form onSubmit={(e) => {
            e.preventDefault();
            const content = e.target.message.value;
            handleSendMessage(content);
  
            e.target.message.value = '';
          }}>
            <input type="text" name="message" placeholder="Enter your message" />
            <button type="submit" className='enviar-icono'><GrSend/></button>
          </form>
        </div>
      </div>
  );
  
};

export default Chat;