import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateServerDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  url: string;
}
