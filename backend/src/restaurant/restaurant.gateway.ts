import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3001', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class RestaurantGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newRestaurant')
  handleNewRestaurant(@MessageBody() data: any): void {
    this.server.emit('newRestaurant', data);
  }
}