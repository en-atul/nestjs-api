import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ContactUsDto {

  @ApiProperty({ description: 'Message body' })
  @IsString()
  readonly message: string;

  @ApiProperty({ description: 'Name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Email' })
  @IsString()
  readonly email: string;

  @ApiProperty({ description: 'Company Name' })
  @IsString()
  readonly company: string;

  @ApiProperty({ description: 'Phone Number' })
  @IsString()
  readonly phoneNumber: string;
}
