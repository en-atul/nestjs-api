import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AtGuard } from 'src/common/guards';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {}

    @UseGuards(AtGuard)
    @Get()
    async findAll(@Res() response) {
      const reviewRes = await this.feedService.findAll();
      return response.status(200).send(reviewRes);
    }
}
