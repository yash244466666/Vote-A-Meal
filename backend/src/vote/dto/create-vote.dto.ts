import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @IsString()
  @ApiProperty({ example: 'example-user-id', description: 'The ID of the user' })
  userId: string;

  @IsInt()
  @ApiProperty({ example: 5, description: 'The value of the vote' })
  value: number;

  @IsString()
  @ApiProperty({ example: 'example-employee-id', description: 'The ID of the employee' })
  employeeId: string;

  @IsString()
  @ApiProperty({ example: 'example-food-pack-id', description: 'The ID of the food pack' })
  foodPackId: string;

  @IsString()
  @ApiProperty({ example: 'example-restaurant-id', description: 'The ID of the restaurant' })
  restaurantId: string;

  // @IsString()
  // createdAt: any;

}