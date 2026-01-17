import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateSuperheroInputDto } from './input-dto/create-superhero-input.dto';
import { SuperheroesService } from '../application/superheroes.service';
import { SuperheroesQueryRepository } from '../infrastructure/superheroes.query-repository';

@Controller('api/superheroes')
export class SuperheroesController {
  constructor(
    private readonly superheroesService: SuperheroesService,
    private readonly superheroesQueryRepository: SuperheroesQueryRepository,
  ) {}

  @Get()
  async getAll() {
    return await this.superheroesQueryRepository.getAllSuperheroes();
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return await this.superheroesQueryRepository.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateSuperheroInputDto) {
    return await this.superheroesService.createSuperhero(dto);
  }
}
