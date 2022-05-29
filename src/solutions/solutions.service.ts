import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSolutionDto } from './dto/create-solution.dto';
import { UpdateSolutionDto } from './dto/update-solution.dto';
import { Solution } from './entities/solution.entity';

@Injectable()
export class SolutionsService {
  constructor(
    @InjectModel(Solution.name)
    private solutionModel: Model<Solution>,
  ) {}

  findAll() {
    return this.solutionModel.find().exec();
  }

  async findOne(id: string) {
    const solution = await this.solutionModel.findOne({ _id: id }).exec();
    if (!solution) {
      throw new NotFoundException(`Solution #${id} not found`);
    }
    return solution;
  }

  create(createSolutionDto: CreateSolutionDto) {
    const coffee = new this.solutionModel(createSolutionDto);
    return coffee.save();
  }

  async update(id: string, updateSolutionDto: UpdateSolutionDto) {
    const existingSolution = await this.solutionModel
      .findOneAndUpdate({ _id: id }, { $set: updateSolutionDto }, { new: true })
      .exec();

    if (!existingSolution) {
      throw new NotFoundException(`Solution #${id} not found`);
    }
    return existingSolution;
  }

  async remove(id: string) {
    const solution = await this.findOne(id);
    return solution.remove();
  }
}
