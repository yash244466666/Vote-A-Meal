import { IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {

    @IsString()
    @IsNotEmpty()
    userId: string;
    
    @IsString()
    @IsNotEmpty()
    employeeId: string;

}
