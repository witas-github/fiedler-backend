import { ObjectID } from 'mongodb';
export declare class Server {
    _id: ObjectID;
    id: string;
    name: string;
    url: string;
    createdAt: Date;
}
