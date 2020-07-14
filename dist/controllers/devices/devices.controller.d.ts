import { EntityManager } from 'mikro-orm';
import { Device } from '../../entities/device';
import { CreateDeviceDto } from './create-device.dto';
import { UpdateDeviceDto } from './update-device.dto';
export declare class DevicesController {
    private em;
    constructor(em: EntityManager);
    getDevices(): Promise<Device[]>;
    getDevice(params: any): Promise<Device[]>;
    findByProtocol(params: any): Promise<Device[]>;
    findBySrn(params: any): Promise<Device[]>;
    createDevice(body: CreateDeviceDto): Promise<Device>;
    updateDevice(params: any, body: UpdateDeviceDto): Promise<Device>;
    deleteDevice(params: any): Promise<void>;
}
