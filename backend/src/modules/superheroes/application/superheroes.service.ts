import { CreateSuperheroInputDto } from '../api/input-dto/create-superhero-input.dto';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { SuperheroesRepository } from '../infrastructure/superheroes.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuperheroesService {
  constructor(private readonly superheroesRepository: SuperheroesRepository) {}
  async createSuperhero({
    nickname,
    realName,
    originDescription,
    superPower,
    catchPhrase,
  }: CreateSuperheroInputDto) {
    const superhero: CreateSuperheroDto = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      super_power: superPower,
      catch_phrase: catchPhrase,
      created_at: new Date().toISOString(),
      image_url: 'https://4kwallpapers.com/images/walls/thumbs_3t/18659.jpg',
    };

    return await this.superheroesRepository.createSuperhero(superhero);
  }
}
