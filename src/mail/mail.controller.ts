import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { ContactUsDto } from './dto/email.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Public()
  @Post('send')
  async sendEmail(
    @Body()
    body: ContactUsDto,
  ) {
    return await this.mailService.sendMail(body);
  }
}
