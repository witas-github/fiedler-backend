
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Server extends Document {
  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  date: any;
}

export const ServerSchema = SchemaFactory.createForClass(Server);
