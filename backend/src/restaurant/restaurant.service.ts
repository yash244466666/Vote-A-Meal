import { Injectable, Logger } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantGateway } from './restaurant.gateway';

@Injectable()
export class RestaurantService {
  private readonly logger = new Logger(RestaurantService.name);

  constructor(
    private prisma: PrismaService,
    private restaurantGateway: RestaurantGateway
  ) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const { name, foodPacks } = createRestaurantDto;
    this.logger.debug(`Creating restaurant with name: ${name}`);
    this.logger.debug(`Food packs: ${JSON.stringify(foodPacks)}`);

    try {
      // Create the restaurant with food packs
      const restaurant = await this.prisma.restaurant.create({
        data: {
          name: name || 'Default Restaurant Name',
          foodPacks: {
            create: foodPacks.map(foodPack => ({
              name: foodPack.name || 'Default Food Pack Name',
              price: foodPack.price || 0,
            })),
          },
        },
        include: {
          foodPacks: true,
        },
      });

      // Emit the new restaurant event
      this.restaurantGateway.server.emit('newRestaurant', restaurant);
      
      this.logger.debug(`Restaurant created successfully: ${JSON.stringify(restaurant)}`);
      return restaurant;
    } catch (error) {
      this.logger.error(`Error creating restaurant: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findAll() {
    try {
      const restaurants = await this.prisma.restaurant.findMany({
        include: {
          foodPacks: true,
        },
      });
      this.logger.debug(`Found ${restaurants.length} restaurants`);
      return restaurants;
    } catch (error) {
      this.logger.error(`Error finding restaurants: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const restaurant = await this.prisma.restaurant.findUnique({
        where: { id },
        include: {
          foodPacks: true,
        },
      });
      if (!restaurant) {
        throw new Error(`Restaurant with id ${id} not found`);
      }
      this.logger.debug(`Found restaurant: ${JSON.stringify(restaurant)}`);
      return restaurant;
    } catch (error) {
      this.logger.error(`Error finding restaurant: ${error.message}`, error.stack);
      throw error;
    }
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    const { name, foodPacks } = updateRestaurantDto;
    this.logger.debug(`Updating restaurant with id: ${id}`);
    this.logger.debug(`New name: ${name}`);
    this.logger.debug(`New food packs: ${JSON.stringify(foodPacks)}`);

    try {
      // Update the restaurant
      const restaurant = await this.prisma.restaurant.update({
        where: { id },
        data: {
          name: name || undefined,
          foodPacks: {
            deleteMany: {}, // Delete all existing food packs
            create: foodPacks.map(foodPack => ({
              name: foodPack.name || 'Default Food Pack Name',
              price: foodPack.price || 0,
            })),
          },
        },
        include: {
          foodPacks: true,
        },
      });

      this.logger.debug(`Restaurant updated successfully: ${JSON.stringify(restaurant)}`);
      return restaurant;
    } catch (error) {
      this.logger.error(`Error updating restaurant: ${error.message}`, error.stack);
      throw error;
    }
  }

  async remove(id: string) {
    this.logger.debug(`Removing restaurant with id: ${id}`);

    try {
      const restaurant = await this.prisma.restaurant.delete({
        where: { id },
      });

      this.logger.debug(`Restaurant removed successfully: ${JSON.stringify(restaurant)}`);
      return restaurant;
    } catch (error) {
      this.logger.error(`Error removing restaurant: ${error.message}`, error.stack);
      throw error;
    }
  }
}