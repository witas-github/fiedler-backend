import { CreateDeviceDto } from '../../dto/create-device.dto';
import { Device } from '../../entities/device.schema';
import { Model } from 'mongoose';
export declare class DevicesService {
    private deviceModel;
    constructor(deviceModel: Model<Device>);
    create(createDeviceDto: CreateDeviceDto): Promise<Device>;
    findAll(): Promise<Device[]>;
    findOne(id: string): Promise<Device>;
    findByProtocol(id: any): Promise<Device[]>;
    findBySrn(id: any): Promise<Device[]>;
}
