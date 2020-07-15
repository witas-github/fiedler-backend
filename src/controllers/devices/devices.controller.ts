import { Body, Controller, Delete, Get, Header, HttpException, Param, Patch, Post, Res } from '@nestjs/common';
import { EntityManager, ManyToOne, wrap } from 'mikro-orm';
import { Device } from '../../entities/device';
import { CreateDeviceDto } from './create-device.dto';
import { UpdateDeviceDto } from './update-device.dto';
import { Protocol } from '../../entities/protocol';
import { Server } from '../../entities/server';

@Controller('devices')
export class DevicesController {

  constructor(private em: EntityManager) {
  }

  @Get()
  public async getDevices() {
    return this.em.find(Device, {},['activeServer', 'registeredServer', 'protocol']);
  }

  @Get(':id')
  public async getDevice(@Param() params) {
    return this.em.find(Device, {_id: params.id},['activeServer', 'registeredServer', 'protocol']);
  }

  @Get('protocol/:protocolId')
  async findByProtocol(@Param() params) {
    const protocol = await this.em.findOne(Protocol, {_id: params.protocolId});
    return this.em.find(Device, {protocol: protocol},['activeServer', 'registeredServer', 'protocol']);
  }

  @Get('srn/:srn')
  async findBySrn(@Param() params) {
    return this.em.find(Device, {srn: params.srn},['activeServer', 'registeredServer', 'protocol']);
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

}
