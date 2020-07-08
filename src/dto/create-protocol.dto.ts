import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProtocolDto {

  @IsString()
  @IsNotEmpty()
  name: string;
  activeSrv: number;
  date: any;
}
