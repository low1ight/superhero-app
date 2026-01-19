import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from '../domain/superhero.entity';
import { SuperheroSummaryViewDto } from '../api/view-dto/superhero-summary.view-dto';
import { SuperheroFullViewDto } from '../api/view-dto/superhero-full.view-dto';
import { BaseQueryParams } from '../../../core/dto/base-query-params.input.dto';
import { Paginator } from '../../../core/dto/paginator/paginator';

@Injectable()
export class SuperheroesQueryRepository {
  constructor(
    @InjectRepository(Superhero) private superheroesRepo: Repository<Superhero>,
  ) {}
  async getAllSuperheroes(
    query: BaseQueryParams,
  ): Promise<Paginator<SuperheroSummaryViewDto>> {
    const [superheroes, totalCount] = await this.superheroesRepo.findAndCount({
      select: {
        id: true,
        nickname: true,
        image_url: true,
      },
      skip: query.getSkip(),
      take: query.pageSize,
      order: {
        created_at: query.getSortDirection(),
      },
    });

    const mappedResult = superheroes.map(
      (item) => new SuperheroSummaryViewDto(item),
    );

    return new Paginator<SuperheroSummaryViewDto>(
      query.pageNumber,
      query.pageSize,
      totalCount,
      mappedResult,
    );
  }

  async getById(id: number): Promise<SuperheroFullViewDto | null> {
    const superhero: Superhero | null = await this.superheroesRepo.findOne({
      where: { id },
      relations: {
        imagesSet: true,
      },
      select: {
        id: true,
        nickname: true,
        real_name: true,
        origin_description: true,
        super_power: true,
        catch_phrase: true,
        image_url: true,
        created_at: true,
        imagesSet: {
          id: true,
          img_key: true,
          created_at: true,
        },
      },
    });

    if (!superhero) return null;

    return new SuperheroFullViewDto(superhero);
  }
}
