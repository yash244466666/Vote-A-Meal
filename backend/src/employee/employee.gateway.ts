import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class EmployeeGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('newEmployee')
  handleNewEmployee(@MessageBody() data: any): void {
    this.server.emit('newEmployee', data);
  }
}