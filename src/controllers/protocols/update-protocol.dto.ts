import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Server } from '../../entities/server';

export class UpdateProtocolDto {

  name: string;
  activeServer: Server;
  registeredServer: Server;
}
