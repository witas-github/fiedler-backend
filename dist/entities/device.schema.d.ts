import { Document } from 'mongoose';
export declare class Device extends Document {
    srn: string;
    regServer: number;
    activeServer: number;
    date: any;
    state: number;
    protocolId: number;
}
export declare const DeviceSchema: import("mongoose").Schema<any>;
