import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Review extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  rating: number;

  @Prop()
  addedAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
