import { Superhero } from '../../domain/superhero.entity';
import { SuperheroImageViewDTO } from './images.view.dto';

export class SuperheroFullViewDto {
  id: number;
  nickname: string;
  realName: string;
  originDescription: string;
  superPower: string;
  catchPhrase: string;
  imageUrl: string | null;
  imagesSet: SuperheroImageViewDTO[];

  constructor({
    id,
    nickname,
    real_name,
    origin_description,
    super_power,
    catch_phrase,
    image_url,
    imagesSet,
  }: Superhero) {
    this.id = id;
    this.nickname = nickname;
    this.realName = real_name;
    this.originDescription = origin_description;
    this.superPower = super_power;
    this.catchPhrase = catch_phrase;
    this.imageUrl = image_url;
    this.imagesSet = imagesSet.map((i) => new SuperheroImageViewDTO(i));
  }
}
