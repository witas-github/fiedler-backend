import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
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
    return await this.serversServices.findAll();
  }

  @Get(':id')
  async findOne(@Param() params) {
    return await this.serversServices.findOne(params.id).catch((error) => {
      throw new HttpException('SERVER_ID_NOT_FOUND', 404);
    });
  }
}
