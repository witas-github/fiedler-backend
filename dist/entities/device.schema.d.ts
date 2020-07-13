import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Device extends Document {
    srn: string;
    regServer: {
        type: [mongoose.Schema.Types.ObjectId];
        required: false;
        ref: 'Server';
    };
    activeServer: {
        type: [mongoose.Schema.Types.ObjectId];
        required: false;
        ref: 'Server';
    };
    date: any;
    state: number;
    protocol: {
        type: [mongoose.Schema.Types.ObjectId];
        required: false;
        ref: 'Protocol';
    };
}
export declare const DeviceSchema: mongoose.Schema<any>;
