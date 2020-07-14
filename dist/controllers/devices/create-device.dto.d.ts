import { Protocol } from '../../entities/protocol';
export declare class CreateDeviceDto {
    srn: string;
    url: string;
    protocol: Protocol;
    state: number;
}
