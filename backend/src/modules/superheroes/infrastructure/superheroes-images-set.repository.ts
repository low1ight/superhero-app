import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SuperheroImagesSet } from '../domain/superhero-images-set.entity';
import { CreateImageDto } from '../dto/create-image.dto';
import { SuperheroImageViewDTO } from '../api/view-dto/superhero-image.view-dto';

@Injectable()
export class SuperheroesImagesSetRepository {
  constructor(
    @InjectRepository(SuperheroImagesSet)
    private readonly superheroImagesSetRepo: Repository<SuperheroImagesSet>,
  ) {}

  async createSuperheroImage(dto: CreateImageDto) {
    const image = this.superheroImagesSetRepo.create(dto);
    const createdImg: SuperheroImagesSet =
      await this.superheroImagesSetRepo.save(image);
    return new SuperheroImageViewDTO(createdImg);
  }

  async getSuperheroImageById(id: number): Promise<SuperheroImagesSet | null> {
    return await this.superheroImagesSetRepo.findOne({
      where: { id },
      select: {
        id: true,
        img_key: true,
        created_at: true,
      },
    });
  }

  async deleteSuperheroImage(id: number) {
    await this.superheroImagesSetRepo.delete({ id });
  }
}
