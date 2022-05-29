import { PartialType } from '@nestjs/swagger';
import { CreateSolutionDto } from './create-solution.dto';

export class UpdateSolutionDto extends PartialType(CreateSolutionDto) {}