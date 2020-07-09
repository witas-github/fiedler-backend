import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from '../../dto/create-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from '../../entities/device.schema';
import { Model } from 'mongoose';

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device.name) private deviceModel: Model<Device>) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<Device> {
    const createdDevice = new this.deviceModel(createDeviceDto);
    return createdDevice.save();
  }

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find().exec();
  }

  async findOne(id: string): Promise<Device> {
    return this.deviceModel.findById(id);
  }
}
