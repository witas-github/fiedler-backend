import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { Protocol } from '../../entities/protocol.schema';
import { CreateProtocolDto } from '../../dto/create-protocol.dto';

@Injectable()
export class ProtocolsService {

  constructor(@InjectModel(Protocol.name) private protocolModel: Model<Protocol>) {}

  async create(createProtocolDto: CreateProtocolDto): Promise<Protocol> {
    const createdProtocol = new this.protocolModel(createProtocolDto);
    return createdProtocol.save();
  }

  async findAll(): Promise<Protocol[]> {
    return this.protocolModel.find().exec();
  }

  async findOne(id: string): Promise<Protocol> {
    return this.protocolModel.findById(id);
  }

}
