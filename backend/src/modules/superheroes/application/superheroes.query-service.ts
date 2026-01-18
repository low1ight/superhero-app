import { Injectable } from '@nestjs/common';
import { S3Service } from '../provider/s3.service';
import { SuperheroSummaryViewDto } from '../api/view-dto/superhero-summary.view-dto';
import { SuperheroesQueryRepository } from '../infrastructure/superheroes.query-repository';
import { SuperheroFullViewDto } from '../api/view-dto/superhero-full.view-dto';

@Injectable()
export class SuperheroesQueryService {
  constructor(
    private readonly s3Service: S3Service,
    private readonly superheroesQueryRepository: SuperheroesQueryRepository,
  ) {}

  async getAll(): Promise<SuperheroSummaryViewDto[]> {
    const superheroes: SuperheroSummaryViewDto[] =
      await this.superheroesQueryRepository.getAllSuperheroes();

    const signedSuperheroes = superheroes.map(async (superhero) => ({
      ...superhero,
      imageUrl: superhero.imageUrl
        ? await this.s3Service.signImage(superhero.imageUrl)
        : null,
    }));

    return await Promise.all(signedSuperheroes);
  }

  async getById(id: number): Promise<SuperheroFullViewDto | null> {
    const superhero: SuperheroFullViewDto | null =
      await this.superheroesQueryRepository.getById(id);
    if (!superhero) return null;
    if (!superhero.imageUrl) return superhero;

    const superHeroImageUrl = await this.s3Service.signImage(
      superhero.imageUrl,
    );

    return { ...superhero, imageUrl: superHeroImageUrl };
  }
}
