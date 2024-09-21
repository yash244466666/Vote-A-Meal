import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { EmployeeModule } from './employee/employee.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the ConfigModule available globally
    }),
    PrismaModule,
    EmployeeModule,
    RestaurantModule,
    VoteModule,
  ],
})
export class AppModule {}