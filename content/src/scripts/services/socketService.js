import io from 'socket.io-client';

const socketUrl = "http://localhost:1231";
const socket = io(socketUrl);

export default new class SocketService {
    
    initSocket(){        
        socket.on('connect', () => {
            console.log("Socket connected");
        });
        return socket;
    }    
}