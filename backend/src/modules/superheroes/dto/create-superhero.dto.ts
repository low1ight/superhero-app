export type CreateSuperheroDto = {
  nickname: string;
  real_name: string;
  origin_description: string;
  super_power: string;
  catch_phrase: string;
  image_url: string | null;
  created_at: Date;
};
