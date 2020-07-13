
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from "mongoose";

@Schema()
export class Protocol extends Document {
  @Prop()
  name: string;

  @Prop()
  activeSrv: { type: [mongoose.Schema.Types.ObjectId], required: false, ref: 'Server' }

  @Prop()
  date: any;
}

export const ProtocolSchema = SchemaFactory.createForClass(Protocol);
