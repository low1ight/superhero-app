import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from '../domain/superhero.entity';
import { SuperheroSummaryDocumentType } from './types/sumerhero-summary.document.type';
import { SuperheroSummaryViewDto } from '../api/view-dto/superhero-summary.view-dto';
import { SuperheroFullDocumentType } from './types/sumerhero-full.document.type';
import { SuperheroFullViewDto } from '../api/view-dto/superhero-full.view-dto';

@Injectable()
export class SuperheroesQueryRepository {
  constructor(
    @InjectRepository(Superhero) private superheroesRepo: Repository<Superhero>,
  ) {}
  async getAllSuperheroes(): Promise<SuperheroSummaryViewDto[]> {
    const superheroes: SuperheroSummaryDocumentType[] =
      await this.superheroesRepo.find({
        select: {
          id: true,
          nickname: true,
          image_url: true,
        },
        take: 5,
        order: {
          created_at: 'desc',
        },
      });

    return superheroes.map((item) => new SuperheroSummaryViewDto(item));
  }

  async getById(id: number): Promise<SuperheroFullViewDto | null> {
    const superhero: SuperheroFullDocumentType | null =
      await this.superheroesRepo.findOne({
        where: { id },
        select: {
          id: true,
          nickname: true,
          real_name: true,
          origin_description: true,
          super_power: true,
          catch_phrase: true,
          image_url: true,
          created_at: true,
        },
      });

    if (!superhero) return null;

    return new SuperheroFullViewDto(superhero);
  }
}
