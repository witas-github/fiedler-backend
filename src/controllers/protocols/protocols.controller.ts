import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { EntityManager, wrap } from 'mikro-orm';
import { Protocol } from '../../../dist/entities/protocol';
import { CreateProtocolDto } from './create-protocol.dto';
import { UpdateProtocolDto } from './update-protocol.dto';
import { Server } from '../../entities/server';

@Controller('protocols')
export class ProtocolsController {

  constructor(private em: EntityManager) {
  }

  @Get()
  public async getProtocols() {
    return this.em.find(Protocol, {},['activeServer']);

  }

  @Get(':id')
  public async getProtocol(@Param() params) {
    return this.em.find(Protocol, {_id: params.id},['activeServer']);
  }

  @Post()
  public async createProtocol(
    @Body() body: CreateProtocolDto,
  ) {
    const protocol = this.em.create(Protocol, body);
    await this.em.persistAndFlush(protocol);
    return protocol;
  }

  @Patch(':id')
  public async updateProtocol(@Param() params, @Body() body: UpdateProtocolDto) {
    const protocol = await this.em.findOne(Protocol, {_id: params.id});
    wrap(protocol).assign(body);
    await this.em.persistAndFlush(protocol);
    return protocol;
  }

  @Delete(':id')
  public async deleteProtocol(@Param() params) {
    this.em.remove(Protocol, {_id: params.id});
  }

}
