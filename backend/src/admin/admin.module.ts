// src/admin/admin.module.ts
import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [AdminService, PrismaService],
  exports: [AdminService],
})
export class AdminModule {}