import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { FoodPackModule } from './food-pack/food-pack.module';
import { VoteModule } from './vote/vote.module';


@Module({
  imports: [PrismaModule, RestaurantModule, FoodPackModule, VoteModule, ],
})
export class AppModule {}
