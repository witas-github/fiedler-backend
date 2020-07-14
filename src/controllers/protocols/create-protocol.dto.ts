import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Server } from '../../entities/server';

export class CreateProtocolDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  activeServer: Server;
}
