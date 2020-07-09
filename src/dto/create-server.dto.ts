import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateServerDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  url: string;
  date: any;
}
