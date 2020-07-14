import { Protocol } from '../../entities/protocol';
export declare class UpdateDeviceDto {
    srn: string;
    url: string;
    protocol: Protocol;
    state: number;
}
