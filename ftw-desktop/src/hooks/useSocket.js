import { useEffect, useRef, useContext } from 'react';
import { UserContext } from '../userContext';

const useSocket = (chatId) => {
  const socketRef = useRef(null);
  const { authToken } = useContext(UserContext);

  useEffect(() => {
    if (chatId) {
      // Construye la URL del WebSocket utilizando el ID del chat
      socketRef.current = new WebSocket(
        `ws://equip10.insjoaquimmir.cat/ws/chat/${chatId}/?token=${authToken}`
      ); // Actualiza la URL con la dirección de tu servidor WebSocket

      // Manejadores de eventos del WebSocket
      socketRef.current.onopen = () => {
        console.log('Conexión WebSocket establecida');
      };

      socketRef.current.onclose = () => {
        console.log('Conexión WebSocket cerrada');
      };

      // Devuelve la instancia del WebSocket actual
      return () => {
        socketRef.current.close(); // Cierra la conexión WebSocket al desmontar el componente
      };
    }
  }, [chatId, authToken]);

  const connect = () => {
    if (socketRef.current.readyState === WebSocket.OPEN) {
      // Envía un mensaje de conexión al servidor
      socketRef.current.send(JSON.stringify({ type: 'connect' }));
    }
  };

  const disconnect = () => {
    if (socketRef.current.readyState === WebSocket.OPEN) {
      // Envía un mensaje de desconexión al servidor
      socketRef.current.send(JSON.stringify({ type: 'disconnect' }));
    }
  };

  const sendMessage = (message) => {
    if (socketRef.current.readyState === WebSocket.OPEN) {
      // Envía un mensaje al servidor
      socketRef.current.send(JSON.stringify({ type: 'new.message', content: message }));

    }
  };

  const ReadMessage = (messageID) => {
    if (socketRef.current.readyState === WebSocket.OPEN) {
      // Envía un mensaje al servidor
      socketRef.current.send(JSON.stringify({ type: 'message.read', message_id: messageID }));

    }
  };

  const onMessage = (callback) => {
    socketRef.current.onmessage = callback;
  };

  const onClose = (callback) => {
    socketRef.current.onclose = callback;
  };

  const offClose = (callback) => {
    socketRef.current.onclose = null;
  };

  const onError = (callback) => {
    socketRef.current.onerror = callback;
  };

  const offError = (callback) => {
    socketRef.current.onerror = null;
  };

  return {
    connect,
    disconnect,
    sendMessage,
    onMessage,
    onClose,
    offClose,
    onError,
    offError,
    ReadMessage
  };
};

export default useSocket;
