import { Controller, Post, Query } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Public()
  @Post('send')
  async sendEmail(@Query('email') email, @Query('name') name) {
    return await this.mailService.sendMail(email, name);
  }
}
