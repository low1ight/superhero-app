import { SuperheroImagesSet } from '../../domain/superhero-images-set.entity';

export type SuperheroFullDocumentType = {
  id: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  super_power: string;
  catch_phrase: string;
  image_url: string | null;
  images: SuperheroImagesSet[];
  created_at: Date;
};
