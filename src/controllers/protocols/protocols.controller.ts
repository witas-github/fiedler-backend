import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
//import { ProtocolsService } from '../../services/protocols/protocols.service';

@Controller('protocols')
export class ProtocolsController {

  //constructor(private readonly protocolsService: ProtocolsService) {}

  // @Post()
  // //@Roles('admin')
  // async create(@Body() createProtocolDto: CreateProtocolDto) {
  //   await this.protocolsService.create(createProtocolDto);
  // }
  //
  // @Get()
  // async findAll(): Promise<Protocol[]> {
  //   return await this.protocolsService.findAll();
  // }
  //
  // @Get(':id')
  // async findOne(@Param() params) {
  //   return await this.protocolsService.findOne(params.id).catch((error) => {
  //     throw new HttpException('PROTOCOL_ID_NOT_FOUND',404);
  //   });
  // }
}
