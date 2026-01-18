import { IsString, IsNotEmpty, Length } from 'class-validator';

export class SuperheroInputDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 30)
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

  image: null | string;
}
