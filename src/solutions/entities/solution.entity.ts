import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Solution extends Document {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const SolutionSchema = SchemaFactory.createForClass(Solution);
