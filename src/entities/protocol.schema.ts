
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Protocol extends Document {
  @Prop()
  name: string;

  @Prop()
  activeSrv: number;

  @Prop()
  date: any;
}

export const ProtocolSchema = SchemaFactory.createForClass(Protocol);
