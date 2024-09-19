import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreateFoodPackDto {
  @IsString()
  name: string;

  @IsOptional()
  price: number;
}

class CreateVoteDto {
  @IsString()
  userId: string;

  @IsOptional()
  value: number;

  @IsString()
  employeeId: string;

  @IsString()
  foodPackId: string;
}

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFoodPackDto)
  foodPacks: CreateFoodPackDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateVoteDto)
  @IsOptional()
  votes?: CreateVoteDto[];
}