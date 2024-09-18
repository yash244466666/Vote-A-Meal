import { Injectable } from '@nestjs/common';
import { CreateFoodPackDto } from './dto/create-food-pack.dto';
import { UpdateFoodPackDto } from './dto/update-food-pack.dto';

@Injectable()
export class FoodPackService {
  create(createFoodPackDto: CreateFoodPackDto) {
    return 'This action adds a new foodPack';
  }

  findAll() {
    return `This action returns all foodPack`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodPack`;
  }

  update(id: number, updateFoodPackDto: UpdateFoodPackDto) {
    return `This action updates a #${id} foodPack`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodPack`;
  }
}
