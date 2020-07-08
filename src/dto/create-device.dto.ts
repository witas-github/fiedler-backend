import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeviceDto {

  @IsString()
  @IsNotEmpty()
  srn: string;

  regServer: number;
  activeServer: number;
  date: any;
  state: number;
  protocolId: number;
}
