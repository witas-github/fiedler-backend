import { Server } from '../../entities/server';
import { Protocol } from '../../entities/protocol';
export declare class CreateDeviceDto {
    srn: string;
    protocol: Protocol;
    state: number;
    registeredServer: Server;
}
