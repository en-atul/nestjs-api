import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ContactUsDto } from './dto/email.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail({ email, ...rest }: ContactUsDto) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Contact Us',
      template: '/email',
      context: {
        email,
        ...rest,
      },
    });
    return 'email sent successfully!';
  }
}
