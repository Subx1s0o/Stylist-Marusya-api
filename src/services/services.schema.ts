import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class StageDTO {
  @Prop({ type: String, required: true })
  uk: string;

  @Prop({ type: String, required: true })
  en: string;
}

export const StageSchema = SchemaFactory.createForClass(StageDTO);

@Schema()
export class ServicesDocument extends Document {
  @Prop({ type: Map, of: String, required: true })
  title: Map<string, string>;

  @Prop({ type: Map, of: String, required: true })
  duration_consultation: Map<string, string>;

  @Prop({ type: Map, of: String, required: false })
  duration_work: Map<string, string>;

  @Prop({ type: Map, of: String, required: true })
  result: Map<string, string>;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: String, enum: ['online', 'offline'], required: true })
  format: 'online' | 'offline';

  @Prop({ type: String, enum: ['style', 'makeup'], required: true })
  category: 'style' | 'makeup';

  @Prop({ type: Map, of: String, required: false })
  attention: Map<string, string>;

  @Prop({
    type: Map,
    of: StageSchema,
    required: false,
  })
  stages: Record<number, StageDTO>;

  @Prop({ type: String, required: false })
  image: string;

  @Prop({ type: Date, required: true })
  createdAt: Date;
  @Prop({ type: Date, required: true })
  updatedAt: Date;
}

export const ServicesSchema = SchemaFactory.createForClass(ServicesDocument);
