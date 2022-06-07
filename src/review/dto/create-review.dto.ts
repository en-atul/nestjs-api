import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @ApiProperty({ description: 'Reviewer Name' })
  @IsString()
  readonly reviewer: string;

  @ApiProperty({ description: 'Position' })
  @IsString()
  readonly position: string;

  @ApiProperty({ description: 'Company' })
  @IsString()
  readonly company: string;


  @ApiProperty({ description: 'Review Description' })
  @IsString()
  readonly description: string;


  @ApiProperty({ description: 'Rating' })
  @IsNumber()
  readonly rating: number;
}
