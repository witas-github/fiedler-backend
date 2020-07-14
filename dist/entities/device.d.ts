import { ObjectID } from 'mongodb';
import { Server } from './server';
import { Protocol } from './protocol';
export declare class Device {
    _id: ObjectID;
    id: string;
    srn: string;
    activeServer: Server;
    registeredServer: Server;
    protocol: Protocol;
    state: number;
    createdAt: Date;
}
