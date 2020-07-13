import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { EntityManager, wrap } from 'mikro-orm';
import { Server } from '../../entities/server';
import { CreateServerDto } from './create-server.dto';
import { UpdateServerDto } from './update-server.dto';

@Controller('servers')
export class ServersController {

  //constructor(private readonly serversServices: ServersService) {}

  constructor(private em: EntityManager) {
  }

  @Get()
  public async getServers() {
    return this.em.find(Server, {});
  }

  @Get(':id')
  public async getServer(@Param() params) {
    return this.em.find(Server, {_id:params.id});
  }


  @Post()
  public async createServer(
    @Body() body: CreateServerDto,
  ) {
    const server = this.em.create(Server, body);
    await this.em.persistAndFlush(server);
    return server;
  }


  @Patch(':id')
  public async updateCategory(@Param() params, @Body() body: UpdateServerDto) {
    const server = await this.em.findOne(Server,{_id:params.id});
    wrap(server).assign(body);
    await this.em.persistAndFlush(server);
    return server;
  }

  @Delete(':id')
  public async deleteServer(@Param() params) {
    this.em.remove(Server,{_id:params.id});
  }

}
