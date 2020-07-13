import { DevicesService } from '../../services/devices/devices.service';
import { Device } from '../../entities/device.schema';
import { CreateDeviceDto } from '../../dto/create-device.dto';
export declare class DevicesController {
    private readonly devicesService;
    constructor(devicesService: DevicesService);
    create(createDeviceDto: CreateDeviceDto): Promise<Device>;
    findAll(): Promise<Device[]>;
    findOne(params: any): Promise<Device>;
    findByProtocol(params: any): Promise<Device[]>;
    findBySrn(params: any): Promise<Device[]>;
}
