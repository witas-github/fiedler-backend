import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServersService } from '../../services/servers/servers.service';
import { CreateServerDto } from '../../dto/create-server.dto';
import { Server } from '../../entities/server.schema';

@Controller('servers')
export class ServersController {

  constructor(private readonly serversServices: ServersService) {}

  @Post()
  //@Roles('admin')
  async create(@Body() createServerDto: CreateServerDto) {
    await this.serversServices.create(createServerDto);
  }

  @Get()
  async findAll(): Promise<Server[]> {
    return this.serversServices.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.serversServices.findOne(params.id);
  }
}
