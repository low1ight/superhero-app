import { Controller, Get } from '@nestjs/common';

@Controller('api/superheroes')
export class SuperheroesController {
  constructor() {}

  @Get()
  getAll(): string {
    return 'work';
  }
}
