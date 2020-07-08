import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProtocolDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;
  date: any;
}
