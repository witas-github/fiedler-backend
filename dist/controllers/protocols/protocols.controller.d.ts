import { ProtocolsService } from '../../services/protocols/protocols.service';
import { CreateProtocolDto } from '../../dto/create-protocol.dto';
import { Protocol } from '../../entities/protocol.schema';
export declare class ProtocolsController {
    private readonly protocolsService;
    constructor(protocolsService: ProtocolsService);
    create(createProtocolDto: CreateProtocolDto): Promise<void>;
    findAll(): Promise<Protocol[]>;
    findOne(params: any): Promise<Protocol>;
}
