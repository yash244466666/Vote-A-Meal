import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class RestaurantGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newRestaurant')
  handleNewRestaurant(@MessageBody() data: any): void {
    this.server.emit('newRestaurant', data);
  }
}