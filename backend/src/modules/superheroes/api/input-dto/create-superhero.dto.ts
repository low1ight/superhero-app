import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  realName: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 500)
  originDescription: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  superPower: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  catchPhrase: string;
}
