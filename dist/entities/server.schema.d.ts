import { Document } from 'mongoose';
export declare class Server extends Document {
    name: string;
    url: string;
    date: any;
}
export declare const ServerSchema: import("mongoose").Schema<any>;
