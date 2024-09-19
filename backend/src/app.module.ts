import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';

import { EmployeeModule } from './employee/employee.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { VoteModule } from './vote/vote.module';


@Module({
  imports: [PrismaModule, EmployeeModule, RestaurantModule, VoteModule, ],
})
export class AppModule {}
