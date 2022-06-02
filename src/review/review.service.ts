import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private reviewModel: Model<Review>,
  ) {}

  findAll() {
    return this.reviewModel.find().exec();
  }

  async findOne(id: string) {
    const review = await this.reviewModel.findOne({ _id: id }).exec();
    if (!review) {
      throw new NotFoundException(`Review #${id} not found`);
    }
    return review;
  }

  create(CreateReviewDto: CreateReviewDto) {
    const review = new this.reviewModel(CreateReviewDto);
    return review.save();
  }

  async update(id: string, UpdateReviewDto: UpdateReviewDto) {
    const existingReview = await this.reviewModel
      .findOneAndUpdate({ _id: id }, { $set: UpdateReviewDto }, { new: true })
      .exec();

    if (!existingReview) {
      throw new NotFoundException(`Review #${id} not found`);
    }
    return existingReview;
  }

  async remove(id: string) {
    const solution = await this.findOne(id);
    return solution.remove();
  }
}
