import { Injectable } from '@nestjs/common';
import { S3Service } from '../provider/s3.service';
import { SuperheroSummaryViewDto } from '../api/view-dto/superhero-summary.view-dto';
import { SuperheroesQueryRepository } from '../infrastructure/superheroes.query-repository';
import { SuperheroFullViewDto } from '../api/view-dto/superhero-full.view-dto';
import { Paginator } from '../../../core/dto/paginator/paginator';
import { BaseQueryParams } from '../../../core/dto/base-query-params.input.dto';

@Injectable()
export class SuperheroesQueryService {
  constructor(
    private readonly s3Service: S3Service,
    private readonly superheroesQueryRepository: SuperheroesQueryRepository,
  ) {}

  async getAll(
    query: BaseQueryParams,
  ): Promise<Paginator<SuperheroSummaryViewDto>> {
    const paginator: Paginator<SuperheroSummaryViewDto> =
      await this.superheroesQueryRepository.getAllSuperheroes(query);

    const signedSuperheroes = paginator.items.map(async (superhero) => ({
      ...superhero,
      imageUrl: superhero.imageUrl
        ? await this.s3Service.signImage(superhero.imageUrl)
        : null,
    }));

    paginator.items = await Promise.all(signedSuperheroes);

    return paginator;
  }

  async getById(id: number): Promise<SuperheroFullViewDto | null> {
    const superhero: SuperheroFullViewDto | null =
      await this.superheroesQueryRepository.getById(id);
    if (!superhero) return null;
    if (!superhero.imageUrl) return superhero;

    const superHeroImageUrl = await this.s3Service.signImage(
      superhero.imageUrl,
    );

    const signedImagesPromise = superhero.imagesSet.map(async (image) => ({
      ...image,
      imgUrl: await this.s3Service.signImage(image.imgUrl),
    }));

    const signedImages = await Promise.all(signedImagesPromise);

    return {
      ...superhero,
      imageUrl: superHeroImageUrl,
      imagesSet: signedImages,
    };
  }
}
