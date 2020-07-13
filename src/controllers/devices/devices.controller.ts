import { Body, Controller, Get, Header, HttpException, Param, Post, Res } from '@nestjs/common';
import { DevicesService } from '../../services/devices/devices.service';
import { Device } from '../../entities/device.schema';
import { CreateDeviceDto } from '../../dto/create-device.dto';
import { ValidationPipe } from '../../common/pipes/validation.pipe';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    //console.log(body);
    //return createDeviceDto;
    return this.devicesService.create(createDeviceDto);
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
    return await this.devicesService.findByProtocol(params.id);
  }

  @Get('srn/:id')
  async findBySrn(@Param() params) {
    return await this.devicesService.findBySrn(params.id);
  }
}
