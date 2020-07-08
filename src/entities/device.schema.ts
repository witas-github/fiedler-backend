
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Device extends Document {
  @Prop()
  srn: string;

  @Prop()
  regServer: number;

  @Prop()
  activeServer: number;

  @Prop()
  date: any;

  @Prop()
  state: number;

  @Prop()
  protocolId: number;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
