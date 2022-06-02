import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { AtGuard } from 'src/common/guards';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { SolutionsService } from './solutions.service';

@Controller('solutions')
export class SolutionsController {
  constructor(private readonly solutionsService: SolutionsService) {}

  @UseGuards(AtGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED) //201
  create(@Body() body: CreateSolutionDto) {
    return this.solutionsService.create(body);
  }

  // @UseGuards(AtGuard)
  @Public()
  @Get()
  async findAll(@Res() response) {
    const solutionsRes = await this.solutionsService.findAll();
    return response.status(200).send(solutionsRes);
  }

  @Public()
  @Get('search')
  async search(@Query() query: { name: string; location: string }) {
    return await this.solutionsService.search(query);
  }

  @UseGuards(AtGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.solutionsService.findOne(id);
  }

  @UseGuards(AtGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.OK) //200
  update(@Param('id') id: string, @Body() body: UpdateSolutionDto) {
    return this.solutionsService.update(id, body);
  }

  @UseGuards(AtGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.OK) //200
  remove(@Param('id') id: string) {
    return this.solutionsService.remove(id);
  }
}
