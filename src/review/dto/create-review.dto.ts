import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({ description: 'Name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Review Desccription' })
  @IsNumber()
  readonly description: string;

  @ApiProperty({ description: 'Reating' })
  @IsNumber()
  readonly rating: number;
}
