import { Superhero } from '../../domain/superhero.entity';

export class SuperheroFullViewDto {
  id: number;
  nickname: string;
  realName: string;
  originDescription: string;
  superPower: string;
  catchPhrase: string;
  imageUrl: string;

  constructor({
    id,
    nickname,
    real_name,
    origin_description,
    super_power,
    catch_phrase,
    image_url,
  }: Superhero) {
    this.id = id;
    this.nickname = nickname;
    this.realName = real_name;
    this.originDescription = origin_description;
    this.superPower = super_power;
    this.catchPhrase = catch_phrase;
    this.imageUrl = image_url;
  }
}
