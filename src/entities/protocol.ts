import { Entity, ManyToOne, OneToOne, PrimaryKey, Property, SerializedPrimaryKey } from 'mikro-orm';
import { ObjectID } from 'mongodb';
import { Server } from './server';


@Entity()
export class Protocol {

  @PrimaryKey()
  _id: ObjectID;

  @SerializedPrimaryKey()
  id: string;

  @Property()
  name: string;

  @ManyToOne()
  activeServer: Server;

  @ManyToOne()
  registeredServer: Server;

  @Property()
  createdAt: Date = new Date();

}
