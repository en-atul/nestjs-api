import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Solution extends Document {
  @Prop()
  title: string;

  @Prop()
  salary: number;

  @Prop()
  location: string;

  @Prop()
  description: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const SolutionSchema = SchemaFactory.createForClass(Solution);
