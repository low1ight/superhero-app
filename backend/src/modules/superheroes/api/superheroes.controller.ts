import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSuperheroInputDto } from './input-dto/create-superhero-input.dto';
import { SuperheroesService } from '../application/superheroes.service';

@Controller('api/superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Get()
  getAll(): string {
    return 'work';
  }

  @Post()
  async create(@Body() dto: CreateSuperheroInputDto) {
    return await this.superheroesService.createSuperhero(dto);
  }
}
