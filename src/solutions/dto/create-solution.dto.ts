import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateSolutionDto {
  @ApiProperty({ description: 'Name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Price' })
  @IsNumber()
  readonly price: number;
}
