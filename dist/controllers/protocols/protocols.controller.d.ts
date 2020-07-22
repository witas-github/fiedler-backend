import { EntityManager } from 'mikro-orm';
import { CreateProtocolDto } from './create-protocol.dto';
import { UpdateProtocolDto } from './update-protocol.dto';
import { Server } from '../../entities/server';
export declare class ProtocolsController {
    private em;
    constructor(em: EntityManager);
    getProtocols(): Promise<{}[]>;
    getProtocol(params: any): Promise<{
        _id: any;
    }[]>;
    createProtocol(body: CreateProtocolDto): Promise<{
        name: string;
        activeServer: Server;
        registeredServer: Server;
    }>;
    updateProtocol(params: any, body: UpdateProtocolDto): Promise<{
        _id: any;
    }>;
    deleteProtocol(params: any): Promise<void>;
}
