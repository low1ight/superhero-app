import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SuperheroInputDto } from './input-dto/superhero-input.dto';
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
  async create(@Body() dto: SuperheroInputDto) {
    return await this.superheroesService.createSuperhero(dto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: SuperheroInputDto,
  ) {
    return await this.superheroesService.updateById(id, dto);
  }

  @Delete(':id')
  async deleteById(@Param('id', ParseIntPipe) id: number) {
    return await this.superheroesService.deleteById(id);
  }
}
