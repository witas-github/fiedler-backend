import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProtocolsService } from '../../services/protocols/protocols.service';
import { CreateProtocolDto } from '../../dto/create-protocol.dto';
import { Protocol } from '../../entities/protocol.schema';

@Controller('protocols')
export class ProtocolsController {

  constructor(private readonly protocolsService: ProtocolsService) {}

  @Post()
  //@Roles('admin')
  async create(@Body() createProtocolDto: CreateProtocolDto) {
    await this.protocolsService.create(createProtocolDto);
  }

  @Get()
  async findAll(): Promise<Protocol[]> {
    return this.protocolsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.protocolsService.findOne(params.id);
  }
}
