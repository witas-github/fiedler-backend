import { Protocol } from '../../entities/protocol';
import { Server } from '../../entities/server';
export declare class UpdateDeviceDto {
    srn: string;
    protocol: Protocol;
    registeredServer: Server;
    state: number;
}
