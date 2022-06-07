import { Controller, Get, Res } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService: FeedService) {}

    @Public()
    @Get()
    async findAll(@Res() response) {
      const reviewRes = await this.feedService.findAll();
      return response.status(200).send(reviewRes);
    }
}
