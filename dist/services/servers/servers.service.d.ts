import { Model } from "mongoose";
import { CreateServerDto } from '../../dto/create-server.dto';
import { Server } from '../../entities/server.schema';
export declare class ServersService {
    private serverModel;
    constructor(serverModel: Model<Server>);
    create(createServerDto: CreateServerDto): Promise<Server>;
    findAll(): Promise<Server[]>;
    findOne(id: string): Promise<Server>;
}
