import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class CreateFoodPackDto {
  @IsString()
  @ApiProperty({ example: 'Food Pack 1', description: 'The name of the food pack' })
  name: string;

  @IsOptional()
  @ApiProperty({ example: 10.99, description: 'The price of the food pack', required: false })
  price: number;
}

class CreateVoteDto {
  @IsString()
  @ApiProperty({ example: 'example-user-id', description: 'The ID of the user' })
  userId: string;

  @IsOptional()
  @ApiProperty({ example: 5, description: 'The value of the vote', required: false })
  value: number;

  @IsString()
  @ApiProperty({ example: 'example-employee-id', description: 'The ID of the employee' })
  employeeId: string;

  @IsString()
  @ApiProperty({ example: 'example-food-pack-id', description: 'The ID of the food pack' })
  foodPackId: string;
}

export class CreateRestaurantDto {
  @IsString()
  @ApiProperty({ example: 'Restaurant Name', description: 'The name of the restaurant' })
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFoodPackDto)
  @ApiProperty({ type: [CreateFoodPackDto], description: 'List of food packs' })
  foodPacks: CreateFoodPackDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVoteDto)
  @IsOptional()
  @ApiProperty({ type: [CreateVoteDto], description: 'List of votes', required: false })
  votes?: CreateVoteDto[];
}