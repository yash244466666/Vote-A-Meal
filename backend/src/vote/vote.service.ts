import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';

interface VoteCountResult {
  foodPackId: string;
  voteCount: number;
}

@Injectable()
export class VoteService {
  private readonly logger = new Logger(VoteService.name);

  constructor(private prisma: PrismaService) {}

  async getWinningFoodPack() {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const result = await this.prisma.$queryRaw<VoteCountResult[]>`
        SELECT "foodPackId", COUNT(*) as "voteCount"
        FROM "Vote"
        WHERE "createdAt" >= ${today}
        GROUP BY "foodPackId"
        ORDER BY "voteCount" DESC
        LIMIT 1
      `;

      if (result.length === 0) {
        throw new Error('No votes found for today');
      }

      const winningFoodPackId = result[0].foodPackId;
      const voteCount = Number(result[0].voteCount);
      const winningFoodPack = await this.prisma.foodPack.findUnique({
        where: { id: winningFoodPackId },
        include: {
          restaurant: true,
        },
      });

      this.logger.debug(`Winning food pack: ${JSON.stringify(winningFoodPack)}`);
      return { ...winningFoodPack, voteCount };
    } catch (error) {
      this.logger.error(`Error finding winning food pack: ${error.message}`, error.stack);
      throw error;
    }
  }

  async create(createVoteDto: CreateVoteDto) {
    const { userId, value, employeeId, foodPackId, restaurantId } = createVoteDto;
    this.logger.debug(`Creating vote with userId: ${userId}, value: ${value}, employeeId: ${employeeId}, foodPackId: ${foodPackId}, restaurantId: ${restaurantId}`);

    try {
      // Check if the user has already voted today
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      

      const existingVote = await this.prisma.vote.findFirst({
        where: {
          userId,
          createdAt: {
            gte: today,
          },
        },
      });

      if (existingVote) {
        throw new HttpException(`User with id ${userId} has already voted today`, HttpStatus.BAD_REQUEST);
      }

      // Check if foodPackId exists
      const foodPack = await this.prisma.foodPack.findUnique({
        where: { id: foodPackId },
      });
      if (!foodPack) {
        throw new HttpException(`FoodPack with id ${foodPackId} does not exist`, HttpStatus.NOT_FOUND);
      }

      // Check if employeeId exists and validate userId
      const employee = await this.prisma.employee.findUnique({
        where: { id: employeeId },
        select: { userId: true }, // Ensure userId is selected
      });
      if (!employee) {
        throw new HttpException(`Employee with id ${employeeId} does not exist`, HttpStatus.NOT_FOUND);
      }
      if (employee.userId !== userId) {
        throw new HttpException(`UserId ${userId} does not correspond to EmployeeId ${employeeId}`, HttpStatus.BAD_REQUEST);
      }

      // Check if restaurantId exists
      const restaurant = await this.prisma.restaurant.findUnique({
        where: { id: restaurantId },
      });
      if (!restaurant) {
        throw new HttpException(`Restaurant with id ${restaurantId} does not exist`, HttpStatus.NOT_FOUND);
      }

      const vote = await this.prisma.vote.create({
        data: {
          userId,
          value,
          employeeId,
          foodPackId,
          restaurantId,
        },
      });

      this.logger.debug(`Vote created successfully: ${JSON.stringify(vote)}`);
      return vote;
    } catch (error) {
      this.logger.error(`Error creating vote: ${error.message}`, error.stack);
      throw error;
    }
  }


  async findAll() {
    try {
      const votes = await this.prisma.vote.findMany();
      this.logger.debug(`Found ${votes.length} votes`);
      return votes;
    } catch (error) {
      this.logger.error(`Error finding votes: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const vote = await this.prisma.vote.findUnique({
        where: { id },
      });
      if (!vote) {
        throw new Error(`Vote with id ${id} not found`);
      }
      this.logger.debug(`Found vote: ${JSON.stringify(vote)}`);
      return vote;
    } catch (error) {
      this.logger.error(`Error finding vote: ${error.message}`, error.stack);
      throw error;
    }
  }

  async update(id: string, updateVoteDto: UpdateVoteDto) {
    this.logger.debug(`Updating vote with id: ${id}`);
    this.logger.debug(`Update data: ${JSON.stringify(updateVoteDto)}`);

    try {
      const vote = await this.prisma.vote.update({
        where: { id },
        data: updateVoteDto,
      });

      this.logger.debug(`Vote updated successfully: ${JSON.stringify(vote)}`);
      return vote;
    } catch (error) {
      this.logger.error(`Error updating vote: ${error.message}`, error.stack);
      throw error;
    }
  }

  async remove(id: string) {
    this.logger.debug(`Removing vote with id: ${id}`);

    try {
      const vote = await this.prisma.vote.delete({
        where: { id },
      });

      this.logger.debug(`Vote removed successfully: ${JSON.stringify(vote)}`);
      return vote;
    } catch (error) {
      this.logger.error(`Error removing vote: ${error.message}`, error.stack);
      throw error;
    }
  }
}