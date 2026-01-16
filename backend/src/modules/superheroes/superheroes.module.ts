import { Module } from '@nestjs/common';
import { SuperheroesController } from './api/superheroes.controller';
import { SuperheroesRepository } from './infrastructure/superheroes.repository';
import { SuperheroesQueryRepository } from './infrastructure/superheroes.query-repository';
import { SuperheroesService } from './application/superheroes.service';

@Module({
  controllers: [SuperheroesController],
  providers: [
    SuperheroesService,
    SuperheroesRepository,
    SuperheroesQueryRepository,
  ],
})
export class SuperheroesModule {}
