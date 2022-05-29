import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Solution, SolutionSchema } from './entities/solution.entity';
import { SolutionsController } from './solutions.controller';
import { SolutionsService } from './solutions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Solution.name,
        schema: SolutionSchema,
      },
    ]),
  ],
  controllers:[SolutionsController],
  providers:[SolutionsService]
})
export class SolutionsModule {}
