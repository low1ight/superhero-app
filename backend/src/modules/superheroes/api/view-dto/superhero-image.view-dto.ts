import { SuperheroImagesSet } from '../../domain/superhero-images-set.entity';

export class SuperheroImageViewDTO {
  id: number;
  imgUrl: string;

  constructor({ id, img_key }: SuperheroImagesSet) {
    this.id = id;
    this.imgUrl = img_key;
  }
}
