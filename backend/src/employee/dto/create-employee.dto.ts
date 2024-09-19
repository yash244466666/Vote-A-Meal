import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'example-user-id', description: 'The ID of the user' })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'example-employee-id', description: 'The ID of the employee' })
  employeeId: string;
}