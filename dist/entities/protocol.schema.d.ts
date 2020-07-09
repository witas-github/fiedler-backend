import { Document } from 'mongoose';
export declare class Protocol extends Document {
    name: string;
    activeSrv: number;
    date: any;
}
export declare const ProtocolSchema: import("mongoose").Schema<any>;
