import { Body, Controller, Get, HttpException, Param, Post, Res } from '@nestjs/common';
import { DevicesService } from '../../services/devices/devices.service';
import { Device } from '../../entities/device.schema';
import { CreateDeviceDto } from '../../dto/create-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  //@Roles('admin')
  async create(@Body() createDeviceDto: CreateDeviceDto) {
    await this.devicesService.create(createDeviceDto);
  }

  @Get()
  async findAll(): Promise<Device[]> {
    return await this.devicesService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Device> {
      return await this.devicesService.findOne(params.id).catch((error) => {
        throw new HttpException('DEVICE_ID_NOT_FOUND', 404);
      });
  }

  @Get('protocol/:id')
  async findByProtocol(@Param() params) {
    return await this.devicesService.findOne(params.id);
  }
}
