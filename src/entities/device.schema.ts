
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Device extends Document {
  @Prop()
  srn: string;

  @Prop()
  regServer: { type: [mongoose.Schema.Types.ObjectId], required: false, ref: 'Server' }

  @Prop()
  activeServer: { type: [mongoose.Schema.Types.ObjectId], required: false, ref: 'Server' }

  @Prop()
  date: any;

  @Prop()
  state: number;

  @Prop()
  protocol: { type: [mongoose.Schema.Types.ObjectId], required: false, ref: 'Protocol' }
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
