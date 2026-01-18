import { SuperheroInputDto } from '../api/input-dto/superhero-input.dto';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { SuperheroesRepository } from '../infrastructure/superheroes.repository';
import { Injectable } from '@nestjs/common';
import { UpdateSuperheroDto } from '../dto/update-superhero.dto';

@Injectable()
export class SuperheroesService {
  constructor(private readonly superheroesRepository: SuperheroesRepository) {}
  async createSuperhero({
    nickname,
    realName,
    originDescription,
    superPower,
    catchPhrase,
  }: SuperheroInputDto) {
    const superhero: CreateSuperheroDto = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      super_power: superPower,
      catch_phrase: catchPhrase,
      created_at: new Date(),
      image_url: 'https://4kwallpapers.com/images/walls/thumbs_3t/18659.jpg',
    };

    return await this.superheroesRepository.createSuperhero(superhero);
  }

  async deleteById(id: number) {
    const isSuperheroExist =
      await this.superheroesRepository.isSuperheroExist(id);

    if (!isSuperheroExist) return null;

    return await this.superheroesRepository.deleteSuperHero(id);
  }

  async updateById(
    id: number,
    {
      nickname,
      realName,
      originDescription,
      superPower,
      catchPhrase,
    }: SuperheroInputDto,
  ) {
    const isSuperheroExist =
      await this.superheroesRepository.isSuperheroExist(id);

    if (!isSuperheroExist) return null;

    const superheroUpdatedDto: UpdateSuperheroDto = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      super_power: superPower,
      catch_phrase: catchPhrase,
      image_url: 'https://4kwallpapers.com/images/walls/thumbs_3t/18659.jpg',
    };

    return await this.superheroesRepository.updateSuperHero(
      id,
      superheroUpdatedDto,
    );
  }
}
