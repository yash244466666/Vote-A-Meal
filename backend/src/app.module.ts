import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { EmployeeModule } from './employee/employee.module';
import { RestaurantModule } from './restaurant/restaurant.module';


@Module({
  imports: [PrismaModule, EmployeeModule, RestaurantModule, ],
})
export class AppModule {}
