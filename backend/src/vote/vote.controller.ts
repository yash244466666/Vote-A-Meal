import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { VoteService } from './vote.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('votes')
@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Get('winner')
  @ApiOperation({ summary: 'Get the winning food pack' })
  @ApiResponse({ status: 200, description: 'The winning food pack has been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'No votes found.' })
  async getWinner() {
    return this.voteService.getWinningFoodPack();
  }

  @Post()
  @ApiOperation({ summary: 'Create a vote' })
  @ApiResponse({ status: 201, description: 'The vote has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.voteService.create(createVoteDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all votes' })
  @ApiResponse({ status: 200, description: 'All votes have been successfully retrieved.' })
  findAll() {
    return this.voteService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a vote by ID' })
  @ApiResponse({ status: 200, description: 'The vote has been successfully retrieved.' })
  @ApiResponse({ status: 404, description: 'Vote not found.' })
  findOne(@Param('id') id: string) {
    return this.voteService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a vote by ID' })
  @ApiResponse({ status: 200, description: 'The vote has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Vote not found.' })
  update(@Param('id') id: string, @Body() updateVoteDto: UpdateVoteDto) {
    return this.voteService.update(id, updateVoteDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a vote by ID' })
  @ApiResponse({ status: 200, description: 'The vote has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Vote not found.' })
  remove(@Param('id') id: string) {
    return this.voteService.remove(id);
  }

}