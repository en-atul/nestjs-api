import { Injectable } from '@nestjs/common';
import Parser from 'rss-parser';

@Injectable()
export class FeedService {
  constructor() {}
  findAll() {
    const rssParser = new Parser();
    return rssParser.parseURL('https://blockworks.co/feed');
  }
}
