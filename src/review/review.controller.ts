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
    Res,
    UseGuards,
  } from '@nestjs/common';
  import { Public } from 'src/common/decorators';
  import { AtGuard } from 'src/common/guards';
  import { CreateReviewDto } from './dto/create-review.dto';
  import { UpdateReviewDto } from './dto/update-review.dto';
  import { ReviewService } from './review.service';
  
  @Controller('review')
  export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}
  
    @UseGuards(AtGuard)
    @Post()
    @HttpCode(HttpStatus.CREATED) //201
    create(@Body() body: CreateReviewDto) {
      return this.reviewService.create(body);
    }
  
    @Public()
    @Get()
    async findAll(@Res() response) {
      const reviewRes = await this.reviewService.findAll();
      return response.status(200).send(reviewRes);
    }
  
    @UseGuards(AtGuard)
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return await this.reviewService.findOne(id);
    }
  
    @UseGuards(AtGuard)
    @Patch(':id')
    @HttpCode(HttpStatus.OK) //200
    update(@Param('id') id: string, @Body() body: UpdateReviewDto) {
      return this.reviewService.update(id, body);
    }
  
    @UseGuards(AtGuard)
    @Delete(':id')
    @HttpCode(HttpStatus.OK) //200
    remove(@Param('id') id: string) {
      return this.reviewService.remove(id);
    }
  }
  