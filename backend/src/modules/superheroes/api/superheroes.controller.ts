import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSuperheroDto } from './input-dto/create-superhero.dto';

@Controller('api/superheroes')
export class SuperheroesController {
  constructor() {}

  @Get()
  getAll(): string {
    return 'work';
  }

  @Post()
  create(@Body() dto: CreateSuperheroDto) {
    return dto;
  }
}
