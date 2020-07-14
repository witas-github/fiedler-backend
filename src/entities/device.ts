import { Entity, ManyToOne, OneToOne, PrimaryKey, Property, SerializedPrimaryKey } from 'mikro-orm';
import { ObjectID } from 'mongodb';
import { Server } from './server';
import { Protocol } from './protocol';


@Entity()
export class Device {

  @PrimaryKey()
  _id: ObjectID;

  @SerializedPrimaryKey()
  id: string;

  @Property()
  srn: string;

  @ManyToOne()
  activeServer: Server;

  @ManyToOne()
  registeredServer: Server;

  @ManyToOne()
  protocol: Protocol;

  @Property()
  state: number;

  @Property()
  createdAt: Date = new Date();

}
