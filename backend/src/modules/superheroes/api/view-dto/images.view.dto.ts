import { SuperheroImagesSet } from '../../domain/superhero-images-set.entity';

export class SuperheroImageViewDTO {
  id: number;
  imgUrl: string;
  createdAt: string;

  constructor({ id, img_key, created_at }: SuperheroImagesSet) {
    this.id = id;
    this.imgUrl = img_key;
    this.createdAt = created_at.toISOString();
  }
}
