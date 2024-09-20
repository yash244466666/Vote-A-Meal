import { Module } from '@nestjs/common';
import { VoteService } from './vote.service';
import { VoteController } from './vote.controller';
import { PrismaService } from '../prisma/prisma.service';
import { VoteGateway } from './vote.gateway';

@Module({
  controllers: [VoteController],
  providers: [VoteService, PrismaService, VoteGateway],
})
export class VoteModule {}