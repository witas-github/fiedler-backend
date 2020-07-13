import { Entity, ManyToOne, OneToOne, PrimaryKey, Property, SerializedPrimaryKey } from 'mikro-orm';
import { ObjectID } from 'mongodb';

@Entity()
export class Server {

  @PrimaryKey()
  _id: ObjectID;

  @SerializedPrimaryKey()
  id: string;

  @Property()
  name: string;

  @Property()
  url: string;

  @Property()
  createdAt: Date = new Date();

}
