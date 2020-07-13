import { Document } from 'mongoose';
import * as mongoose from "mongoose";
export declare class Protocol extends Document {
    name: string;
    activeSrv: {
        type: [mongoose.Schema.Types.ObjectId];
        required: false;
        ref: 'Server';
    };
    date: any;
}
export declare const ProtocolSchema: mongoose.Schema<any>;
