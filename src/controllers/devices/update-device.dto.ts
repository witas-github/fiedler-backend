
import { Protocol } from '../../entities/protocol';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Server } from '../../entities/server';

export class UpdateDeviceDto {


  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  srn: string;

  @IsNotEmpty()
  protocol: Protocol;

  @IsNotEmpty()
  registeredServer: Server;

  state: number;

}
