import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { Server } from '../../entities/server';
import { ManyToOne, Property } from 'mikro-orm';
import { Protocol } from '../../entities/protocol';

export class CreateDeviceDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  srn: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  url: string;

  @IsNotEmpty()
  protocol: Protocol;

  @IsNumber()
  state: number;

}
