import { SuperheroInputDto } from '../api/input-dto/superhero-input.dto';
import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { SuperheroesRepository } from '../infrastructure/superheroes.repository';
import { Injectable } from '@nestjs/common';
import { UpdateSuperheroDto } from '../dto/update-superhero.dto';
import { randomUUID } from 'crypto';
import { S3Service } from '../provider/s3.service';

@Injectable()
export class SuperheroesService {
  constructor(
    private readonly superheroesRepository: SuperheroesRepository,
    private readonly s3Service: S3Service,
  ) {}
  async createSuperhero(
    {
      nickname,
      realName,
      originDescription,
      superPower,
      catchPhrase,
    }: SuperheroInputDto,
    image: Express.Multer.File | null,
  ) {
    let imgKey: null | string = null;
    if (image) {
      imgKey = randomUUID();
      await this.s3Service.putImage(image, imgKey);
    }

    const superhero: CreateSuperheroDto = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      super_power: superPower,
      catch_phrase: catchPhrase,
      created_at: new Date(),
      image_url: imgKey,
    };

    return await this.superheroesRepository.createSuperhero(superhero);
  }

  async deleteById(id: number) {
    const superhero = await this.superheroesRepository.getSuperheroById(id);

    if (!superhero) return null;

    await this.superheroesRepository.deleteSuperHero(id);

    if (superhero.image_url) {
      await this.s3Service.deleteImage(superhero.image_url);
    }
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
    imageFile: Express.Multer.File | null,
  ) {
    const superhero = await this.superheroesRepository.getSuperheroById(id);

    if (!superhero) return null;

    let imgKey: null | string = null;

    if (imageFile) {
      imgKey = randomUUID();
      await this.s3Service.putImage(imageFile, imgKey);
      if (superhero.image_url) {
        await this.s3Service.deleteImage(superhero.image_url);
      }
    }

    const superheroUpdatedDto: UpdateSuperheroDto = {
      nickname,
      real_name: realName,
      origin_description: originDescription,
      super_power: superPower,
      catch_phrase: catchPhrase,
      image_url: imgKey,
    };

    return await this.superheroesRepository.updateSuperHero(
      id,
      superheroUpdatedDto,
    );
  }
}
