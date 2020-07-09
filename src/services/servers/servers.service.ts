import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from '../../entities/device.schema';
import { Model } from "mongoose";
import { CreateServerDto } from '../../dto/create-server.dto';
import { Server } from '../../entities/server.schema';

@Injectable()
export class ServersService {
  constructor(@InjectModel(Server.name) private serverModel: Model<Server>) {}

  async create(createServerDto: CreateServerDto): Promise<Server> {
    const createdServer = new this.serverModel(createServerDto);
    return createdServer.save();
  }

  async findAll(): Promise<Server[]> {
    return this.serverModel.find().exec();
  }

  async findOne(id: string): Promise<Server> {
    return this.serverModel.findById(id);
  }

}
