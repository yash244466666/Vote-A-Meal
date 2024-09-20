import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeGateway } from './employee.gateway';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeGateway],
})
export class EmployeeModule {}