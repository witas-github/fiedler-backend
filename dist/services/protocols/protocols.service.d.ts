import { Model } from "mongoose";
import { Protocol } from '../../entities/protocol.schema';
import { CreateProtocolDto } from '../../dto/create-protocol.dto';
export declare class ProtocolsService {
    private protocolModel;
    constructor(protocolModel: Model<Protocol>);
    create(createProtocolDto: CreateProtocolDto): Promise<Protocol>;
    findAll(): Promise<Protocol[]>;
    findOne(id: string): Promise<Protocol>;
}
