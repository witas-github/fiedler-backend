import { ServersService } from '../../services/servers/servers.service';
import { CreateServerDto } from '../../dto/create-server.dto';
import { Server } from '../../entities/server.schema';
export declare class ServersController {
    private readonly serversServices;
    constructor(serversServices: ServersService);
    create(createServerDto: CreateServerDto): Promise<void>;
    findAll(): Promise<Server[]>;
    findOne(params: any): Promise<Server>;
}
