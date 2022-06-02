import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Solution extends Document {
  @Prop()
  name: string;

  @Prop()
  salary: number;

  @Prop()
  location: string;
}

export const SolutionSchema = SchemaFactory.createForClass(Solution);
