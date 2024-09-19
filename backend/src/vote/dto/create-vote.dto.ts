import { IsInt, IsString } from 'class-validator';

export class CreateVoteDto {
  @IsString()
  userId: string;

  @IsInt()
  value: number;

  @IsString()
  employeeId: string;

  @IsString()
  foodPackId: string;

  @IsString()
  restaurantId: string;

  // @IsString()
  // createdAt: any;

}