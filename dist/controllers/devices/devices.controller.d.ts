import { DevicesService } from '../../services/devices/devices.service';
import { Device } from '../../entities/device.schema';
import { CreateDeviceDto } from '../../dto/create-device.dto';
export declare class DevicesController {
    private readonly devicesService;
    constructor(devicesService: DevicesService);
    create(createDeviceDto: CreateDeviceDto): Promise<void>;
    findAll(): Promise<Device[]>;
    findOne(params: any): Promise<Device>;
}
