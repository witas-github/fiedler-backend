import { EntityManager } from 'mikro-orm';
import { Server } from '../../entities/server';
import { CreateServerDto } from './create-server.dto';
import { UpdateServerDto } from './update-server.dto';
export declare class ServersController {
    private em;
    constructor(em: EntityManager);
    getServers(): Promise<Server[]>;
    getServer(params: any): Promise<Server[]>;
    createServer(body: CreateServerDto): Promise<Server>;
    updateCategory(params: any, body: UpdateServerDto): Promise<Server>;
    deleteServer(params: any): Promise<void>;
}
