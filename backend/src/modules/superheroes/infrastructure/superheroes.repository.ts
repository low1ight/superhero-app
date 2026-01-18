import { CreateSuperheroDto } from '../dto/create-superhero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Superhero } from '../domain/superhero.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { SuperheroSummaryViewDto } from '../api/view-dto/superhero-summary.view-dto';
import { UpdateSuperheroDto } from '../dto/update-superhero.dto';

@Injectable()
export class SuperheroesRepository {
  constructor(
    @InjectRepository(Superhero)
    private readonly superheroRepo: Repository<Superhero>,
  ) {}

  async createSuperhero(dto: CreateSuperheroDto) {
    const superhero = this.superheroRepo.create(dto);
    const createdHero: Superhero = await this.superheroRepo.save(superhero);
    return new SuperheroSummaryViewDto(createdHero);
  }

  async isSuperheroExist(id: number): Promise<boolean> {
    return await this.superheroRepo.existsBy({ id });
  }

  async updateSuperHero(id: number, dto: UpdateSuperheroDto) {
    await this.superheroRepo.update({ id }, dto);
  }

  async deleteSuperHero(id: number) {
    await this.superheroRepo.delete({ id });
  }
}
