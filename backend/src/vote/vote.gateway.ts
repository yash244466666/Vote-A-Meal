import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class VoteGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newVote')
  handleNewVote(@MessageBody() data: any): void {
    this.server.emit('newVote', data);
  }
}