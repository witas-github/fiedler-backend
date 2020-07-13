import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateServerDto {

  name: string;
  url: string;
}
