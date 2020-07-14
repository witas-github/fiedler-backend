import { Body, Controller, Delete, Get, Header, HttpException, Param, Patch, Post, Res } from '@nestjs/common';
import { EntityManager, wrap } from 'mikro-orm';
import { Device } from '../../entities/device';
import { CreateDeviceDto } from './create-device.dto';
import { UpdateDeviceDto } from './update-device.dto';
import { Protocol } from '../../entities/protocol';

@Controller('devices')
export class DevicesController {

  constructor(private em: EntityManager) {
  }

  @Get()
  public async getDevices() {
    return this.em.find(Device, {});
  }

  @Get(':id')
  public async getDevice(@Param() params) {
    return this.em.find(Device, {_id: params.id});
  }

  @Get('protocol/:protocolId')
  async findByProtocol(@Param() params) {
    const protocol = await this.em.findOne(Protocol,{_id: params.protocolId});
    return this.em.find(Device, {protocol: protocol});
  }

  @Get('srn/:srn')
  async findBySrn(@Param() params) {
    return this.em.find(Device, {srn: params.srn});
  }

  @Post()
  public async createDevice(
    @Body() body: CreateDeviceDto,
  ) {
    const device = this.em.create(Device, body);
    await this.em.persistAndFlush(device);
    return device;
  }

  @Patch(':id')
  public async updateDevice(@Param() params, @Body() body: UpdateDeviceDto) {
    const device = await this.em.findOne(Device, {_id: params.id});
    wrap(device).assign(body);
    await this.em.persistAndFlush(device);
    return device;
  }

  @Delete(':id')
  public async deleteDevice(@Param() params) {
    this.em.remove(Device, {_id: params.id});
  }

  //constructor(private readonly devicesService: DevicesService) {}

  //@Post()
  //create(@Body() createDeviceDto: CreateDeviceDto) {
    //console.log(body);
    //return createDeviceDto;
    //return this.devicesService.create(createDeviceDto);
  //}

  // @Get()
  // async findAll(): Promise<Device[]> {
  //   return await this.devicesService.findAll();
  // }
  //
  // @Get(':id')
  // async findOne(@Param() params): Promise<Device> {
  //     return await this.devicesService.findOne(params.id).catch((error) => {
  //       throw new HttpException('DEVICE_ID_NOT_FOUND', 404);
  //     });
  // }
  //
  // @Get('protocol/:id')
  // async findByProtocol(@Param() params) {
  //   return await this.devicesService.findByProtocol(params.id);
  // }
  //
  // @Get('srn/:id')
  // async findBySrn(@Param() params) {
  //   return await this.devicesService.findBySrn(params.id);
  // }
}
