import { Injectable,ConflictException,NotFoundException} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { EmployeeGateway } from './employee.gateway';

@Injectable()
export class EmployeeService {
  constructor(
    private prisma: PrismaService,
    private employeeGateway: EmployeeGateway 
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const { userId, employeeId } = createEmployeeDto;
    try {
      const newEmployee = await this.prisma.employee.create({
        data: {
          userId,
          employeeId,
        },
      });
      // Emit the new employee event
      this.employeeGateway.server.emit('newEmployee', newEmployee);
      
      return newEmployee;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Employee ID already exists');
        }
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.employee.findMany();
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    try {
      const updatedEmployee = await this.prisma.employee.update({
        where: { id },
        data: updateEmployeeDto,
      });
      return updatedEmployee;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Employee with ID ${id} not found`);
        }
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.employee.delete({
        where: { id },
      });
      return { message: `Employee with ID ${id} successfully deleted` };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Employee with ID ${id} not found`);
        }
      }
      throw error;
    }
  }
}
