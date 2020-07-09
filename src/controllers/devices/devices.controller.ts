import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    return this.devicesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.devicesService.findOne(params.id);
  }
}
